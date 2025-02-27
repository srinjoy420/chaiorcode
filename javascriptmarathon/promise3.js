const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const path = 'C:\\Users\\Srinjoy\\Desktop\\chai code\\hi.txt';
function readfilepath(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        })
    })
}
// functtion for writefile
function writefilepath(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

// unlink or delete
function unlinkwithpromise(filepath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
}

const result = readfilepath(path, 'utf-8')
result.then((content) => writefilepath('backup.txt', content))
    .then(() => unlinkwithpromise(path)).catch((e) => {
        console.log("error while reading or writing file", e);
    }).finally(() => {
        console.log("all doen");

    })
// ...using await ...............
async function dotask() {
   try{
    const path2 = 'C:\\Users\\Srinjoy\\Desktop\\chai code\\backup.txt';
    const filecontent = await readfilepath(path2, "utf-8");
    await writefilepath('agaibackup.txt', filecontent);
    await unlinkwithpromise(path2)
    console.log("all done");

   }
   catch(e){
       console.log("error while reading or writing file", e);
   } finally{
       console.log("all done");
   }

}






// legecycode****************************************************************
console.log('starting programming');

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