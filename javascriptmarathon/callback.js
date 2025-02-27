const fs = require('fs');
const fsv2 = require('fs/promises');
const path2 = 'C:\\Users\\Srinjoy\\Desktop\\chai code\\backup.txt';

// this is code using promise

const result = fsv2.readFile(path2, 'utf8');
result.then((content) => fsv2.writeFile('hi.txt', content))
    .then(()=>fsv2.unlink(path2)).catch((err)=>console.log(err));


//............................................................................
   
   
   
    // using callbacks

// const filePath = 'C:\\Users\\Srinjoy\\Desktop\\chai code\\javascriptmarathon\\hello.txt';
// console.log('starting programming');

// fs.readFile(filePath, 'utf-8', function (err, content) {
//     if (err) {
//         console.log("error in file reading", err);
//     } else {
//         console.log("content is", content);
//         fs.writeFile("backup.txt", content, function (err) {
//             if (err) {
//                 console.log("error in writing file", err);
//             } else {
//                 console.log("backup file created");
//                 fs.unlink(filePath, function (err) {
//                     if (err) {
//                         console.log("error in deleting file", err);
//                     } else {
//                         console.log("file deleted successfully");
//                     }
//                 });
//             }
//         });
//     }
// });
