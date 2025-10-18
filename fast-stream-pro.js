
import fs from "fs";

// Config
const TOTAL_PRODUCTS = 200_000_000;
const BATCH_SIZE = 100_000;
const file = fs.createWriteStream("products_200M.json", { flags: "w", highWaterMark: 256 * 1024 });

// Helper: write padded string to buffer
function writeString(buffer, offset, str, length) {
  const strBuf = Buffer.from(str);
  strBuf.copy(buffer, offset, 0, Math.min(strBuf.length, length));
  return offset + length;
}

// Generate one product binary
function generateProductBuffer(id) {
  const buffer = Buffer.alloc(32); // 32 bytes per product
  let offset = 0;

  buffer.writeUInt32LE(id, offset); // id
  offset += 4;

  buffer.writeFloatLE(Math.random() * 1000, offset); // price
  offset += 4;

  buffer.writeUInt16LE(id % 100, offset); // category
  offset += 2;

  buffer.writeUInt16LE(Math.floor(Math.random() * 1000), offset); // stock
  offset += 2;

  offset = writeString(buffer, offset, `Product-${id}`, 20); // name padded
  return buffer;
}

let count = 0;
function writeBatch() {
  let ok = true;

  while (ok && count < TOTAL_PRODUCTS) {
    const batchBuffer = Buffer.alloc(BATCH_SIZE * 32); // batch memory
    for (let i = 0; i < BATCH_SIZE && count < TOTAL_PRODUCTS; i++, count++) {
      const prodBuffer = generateProductBuffer(count);
      prodBuffer.copy(batchBuffer, i * 32);
    }

    ok = file.write(batchBuffer);

    if (!ok) {
      file.once("drain", writeBatch);
      return;
    }
  }

  if (count >= TOTAL_PRODUCTS) file.end();
}

console.time("GenerateProducts");
file.on("finish", () => {
  console.timeEnd("GenerateProducts");
  console.log("Finished generating 200M products in binary!");
});

writeBatch();