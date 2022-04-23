/*
---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
1) child_process

const cp = require("child_process");
cp.execSync("start brave https:\\www.github.com ");
cp.execSync("calc");
console.log("Trying to run code");
let outout = cp.execSync("node tempCodeRunnerFile.js");
console.log("Output is :- \n" + outout);



---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
2)os module

const os = require("os");
console.log(os.cpus()); //gives you cpu information
console.log(os.arch()); //x64
console.log(os.platform()); //win32
console.log(os.networkInterfaces()); // network information
*/
/*
---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
3) file system
   
create                  update                read                delete
```````````````````````````````````````````````````````````````````````````                
fs.openSync;       |    fs.appendFileSync; |   fs.readFileSync |   fs.unlinkSync;
fs.writeFileSync;  |
`````````````````````````````````````````````````````````````````````````````
const fs = require("fs");

//=>create file , update file

fs.writeFileSync("Read.txt", "This is the text file!"); //if file exist then update file otherwise create new file

//=>read file
let output = fs.readFileSync("Read.txt");
console.log(output.toString());

//=> append to the end of the file
fs.appendFileSync("Read.txt", "\nnew string");

*/
/*
---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
4) Related To The folder / directory

create          read            delete               
```````````````````````````````````````````
mkdirSync       readdirSync       rmdirSync
```````````````````````````````````````````````
//creat a folder
fs.mkdirSync("MainContainer");

//creat file into the folder
fs.writeFileSync(
  "MainContainer/main.text",
  "I am inside the MainContainer file"
);

// Notes :- To delete directory first we have to delete the all files inside the direactory the delete the directory using rmdirSync("dirName")

let contain = fs.readdirSync("MainContainer");
console.log(contain); // show the all file in directory MainContainer

for (let i = 0; i < contain.length; i++) {
  //remove file
  fs.unlinkSync("MainContainer/" + contain[i]); // delete all the files in MainContainer one by one
}

//remove folder
fs.rmdirSync("MainContainer"); // delete the directory

// gives true if the file or directory is exist

let doesPathExist = fs.existsSync("Read.txt"); //true
console.log(doesPathExist);

doesPathExist = fs.existsSync("Read1.txt"); //false
console.log(doesPathExist);

// for check the elements is file or a directory

let detailsObj = fs.lstatSync(__dirname + "\\Read.txt"); // '__dirname -> c:\Users\Akash\Desktop\What To Do\Web dev + \\Read.txt' ==> 'c:\Users\Akash\Desktop\What To Do\Web dev\Read.txt'

console.log(__dirname); //c:\Users\Akash\Desktop\What To Do\Web dev
console.log(detailsObj.isFile()); //true because Read.txt is file path not a directory path
console.log(detailsObj.isDirectory());

*/

// Challange No :- 1
/*
Create 10 directory with lecture 1 - 10 and each folder had a redme file in which the no of lecture is written.

const fs = require("fs");
const path = require("path");

for (let i = 0; i < 10; i++) {

    let dirPathName = `Lecture ${i}`;
    fs.mkdirSync(dirPathName);
    fs.writeFileSync(path.join(dirPathName,"ReadMe.txt") , `#This is ${dirPathName}`)
}
*/

/*
delete all files

for (let i = 0; i < 10 ; i++) {
    let dirPathName = `Lecture ${i}`;
    let dirPathlen = fs.readdirSync(dirPathName).length;
    for (let j = 0 ; j < dirPathlen ; j++) {
        fs.unlinkSync(path.join(dirPathName,"ReadMe.txt"));
    }
    fs.rmdirSync(dirPathName);
}
*/

// 5) path

/*

const path = require("path");
let ext = path.extname(path.join(__dirname,"Read.txt"));  //Gives the extension of the file
console.log(ext);

let basename = path.basename(__dirname);
console.log(basename); // Gives the basename of the directory
*/

//6)Intro of npm

// a)chalk b)figlet
const chalk = require("chalk");
console.log(chalk.blue("Namste World!"));
