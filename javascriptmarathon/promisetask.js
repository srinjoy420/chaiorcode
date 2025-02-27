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

// const result = readfilepath(path, 'utf-8')
// result.then((content) => writefilepath('backup.txt', content))
//     .then(() => unlinkwithpromise(path)).catch((e) => {
//         console.log("error while reading or writing file", e);
//     }).finally(() => {
//         console.log("all doen");

//     })
// wait 10secoends
function wait(secoends){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve();

        },secoends*10);

    })
    
}

async function dotask() {
    try{
     const path2 = 'C:\\Users\\Srinjoy\\Desktop\\chai code\\backup.txt';
     const filecontent = await readfilepath(path2, "utf-8");
    await wait(10);

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