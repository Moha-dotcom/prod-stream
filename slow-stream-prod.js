// import fs from 'fs/promises';
// import fsSync, { read, write } from 'fs';
// import { Buffer, kMaxLength } from 'buffer';
// import { json } from 'stream/consumers';


// async function poolsize(buff) { 
        // Buffer.poolSize = 94934
        // if(Buffer.isBuffer(buff)){
        //         console.log(Buffer.poolSize)
        //         return Buffer.poolSize
        // }
        // return null;


// poolsize(Buffer.alloc(94394))



// async function ObjProduct() {
//         const product = [
//                 {
//                         "id" : "jfo43029235fafl93p",
//                         name : "Nike 601",
//                         Price : "$89"
//                 },
//                 {
//                          "id" : "jfo43029235fafl93p",
//                 name : "Nike 601",
//                 Price : "$89"
//                 },
//                  {
//                          "id" : "jfo43029235fafl93p",
//                 name : "Nike 601",
//                 Price : "$89"
//                 },

//                  {
//                          "id" : "jfo43029235fafl93p",
//                 name : "Nike 601",
//                 Price : "$89"
//                 },


//                  {
//                          "id" : "jfo43029235fafl93p",
//                 name : "Nike 601",
//                 Price : "$89"
//                 },


//                  {
//                          "id" : "jfo43029235fafl93p",
//                 name : "Nike 601",
//                 Price : "$89"
//                 },

//                  {
//                          "id" : "jfo43029235fafl93p",
//                 name : "Nike 601",
//                 Price : "$89"
//                 }

//         ]

 

//         const jsonData = JSON.stringify(product);
//         const byteLength =  Buffer.byteLength(jsonData, "utf-8");
//         console.log(byteLength)

//         // Allocate a buff Memory
//         const newBuff = Buffer.alloc(byteLength);
//         newBuff.write(jsonData, "utf-8")
//         // writing to a file
//         fsSync.writeFileSync("products.bin", newBuff);       
//         console.log(newBuff[3])


//         console.log(JSON.parse(newBuff.slice(0,  newBuff.length)))



        

//         // const kMaxLength = 9000;
//         // const buff = Buffer.alloc(kMaxLength);
//         // buff[0] = product
//         // console.log(buff[0])
// }

// ObjProduct()





// function generateRandomProduct() {
        
// }


// (async () => {
//         const fileHandle = await fs.open("big-buffer.txt", "w");
//         const stream = fileHandle.createWriteStream( { highWaterMark:  400 * 1024})
//         console.time("WriteMany")
     
//         let count = 0;
//         const len = 1_000_000_000
//        const  writeMany =  () =>  {
              

//                 while(count < len){
                       

//                         // Create a buffer size of HighWaterMark
//                         const buff = Buffer.from(` ${count}  `, "utf-8")
//                         // const buff = Buffer.from(arr.join(''), 'utf-8');
                      
//                         // end Stream and write the last Buffer
//                         if(count === len-1){
//                                 return stream.end(buff)
//                         }
//                         // If buff is Full drain 
//                         if( !stream.write(buff)) break;
//                         count++;

//                 }

//        }
 

       
//        writeMany()
     
//   let indexCount = 0;
//         stream.on("drain", () => {
//                 //   console.log(`Drained the buffer ${indexCount++}`)
              
//                 writeMany()
                
                
//         })
        

//         stream.on("finish", () => {
//                 console.timeEnd("WriteMany")
                
//                 fileHandle.close()
//         })





//         // fileHandle.close()
// })()




// // (async () => {
// //     console.time('file-write-time');
// //     const fileHandler = await fs.open("big.txt", "w");


// //     for(let i = 0; i <=1000000; i++ ){
// //               await fileHandler.write(`${i}\n`)
// //     }
            
 

// //     console.timeEnd('file-write-time');
// // })()




// // async function createreadStream (){
// //         console.time("HandleStream")
// //         const stream = fsSync.createWriteStream("big.txt", {flags : "w"});

                
// //                 for(let i = 0 ; i < 1_000_000; i++){
// //                         const bufferAlloc = Buffer.from(` ${i} `, "utf-8")
// //                         stream.write(bufferAlloc)
// //                  }
      
// //             console.timeEnd("HandleStream")


// // }

// // createreadStream()

// // async function testWithOutBuffer() {

// //     //   file-write-time: 186.612ms
// //     // File written successfully
// //     console.time('file-write-time');
// //     const bigText = "Hello, World!".repeat(10_000_000); // 128 MB File
// //     const fileHandle = await fs.writeFile('big.txt', bigText);
// //     console.timeEnd('file-write-time');
  
// //     console.log('File written successfully');   
    


// // }

// // testWithOutBuffer()


// // async function ReadWithoutBuffer() {
// //     // file-read-time: 225.456ms
// //     console.time('file-read-time');

// //     const data = await fs.readFile('big.txt', 'utf-8');
   
        
// //     console.log('File read successfully, length:', data.length);

  
// //      console.timeEnd('file-read-time');
// // }




// // // async function WriteWithBuffer() {
// // //     const bigText = "Hello, World!".repeat(10_000_000); // 128 MB File
// // //     const fileHandle = await fs.open('big-buffer.txt', 'w');
   
   

// // //     const bufferAlloc = Buffer.from(bigText);
// // //     console.time('file-write-buffer-time');
// // //     await fileHandle.write(bufferAlloc, 0, bufferAlloc.length, 0);

// // //     console.timeEnd('file-write-buffer-time');
// // //     console.log('File with buffer written successfully');
// // //     await fileHandle.close();
// // // }

// // // await WriteWithBuffer()


// // async function ReadWithBuffer() {
// //   const fileHandle = await fs.open("big-buffer.txt", "r");
// //   const stats = await fileHandle.stat();
// //   const fileSize = stats.size;
  
// //   const bufferAlloc = Buffer.alloc(fileSize);
// //   console.time("file-read-buffer-time");
// //   await fileHandle.read(bufferAlloc, 0, fileSize, 0);
// //   await fileHandle.close();
// //   console.timeEnd("file-read-buffer-time");

// //   console.log("✅ File with buffer read successfully, length:", bufferAlloc.length);
// // }

// // ReadWithoutBuffer()
// // ReadWithBuffer()





// // async function test() {
// //     const fileHandle = await fs.open("example.txt", "w+");
// //     console.time("file-write-time");
// //     let len = 1_000_000
// //     for(let i = 0; i <= 100; i++){
// //         const bufferAlloc = Buffer.from("Hello, World! " + i + "\n");
// //         await fileHandle.write(bufferAlloc, 0, bufferAlloc.length, len);
// //         len += bufferAlloc.length;  

       
        
    
// //     }
// //     console.timeEnd("file-write-time");
// //     await fileHandle.close();
// // }




// //     test();



// import fs from "fs";

// // Number of products to generate
// const TOTAL_PRODUCTS = 200_000_000;
// const BATCH_SIZE = 100_000; // generate/write in batches to avoid memory issues

// // File to write products
// const file = fs.createWriteStream("products_200M.json", { flags: "w", highWaterMark: 256 * 1024 });

// // Helper function to create a product object
// function generateProduct(id) {
//   return {
//     id,
//     name: `Product-${id}`,
//     price: (Math.random() * 1000).toFixed(2),
//     category: `Category-${id % 100}`,
//     stock: Math.floor(Math.random() * 1000),
//   };
// }

// let count = 0;
//  let countK = 0;
// function writeBatch() {
//   let ok = true;
  
//   while (ok && count < TOTAL_PRODUCTS) {
//     let batch = [];
//     for (let i = 0; i < BATCH_SIZE && count < TOTAL_PRODUCTS; i++, count++) {
//       batch.push(generateProduct(count));
//     }

//     // Convert batch to JSON string
//     const json = batch.map(p => JSON.stringify(p)).join("\n") + "\n";

//     // Write batch to stream
//     ok = file.write(json);

   
//     // If buffer is full, wait for drain
//     if (!ok) {
//       file.once("drain", writeBatch);
//       console.log(`Drained ${countK++} `)
//       return;
//     }
//   }

//   if (count >= TOTAL_PRODUCTS) {
//     file.end();
//   }
// }

// console.time("GenerateProducts");
// file.on("finish", () => {
//   console.timeEnd("GenerateProducts");
//   console.log("Finished generating 200M products!");
// });

// writeBatch();


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