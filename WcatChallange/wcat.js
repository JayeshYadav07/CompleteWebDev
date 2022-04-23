#!/usr/bin/env node

const fs = require('fs');


// tacking the input form console
let inputArr = process.argv.slice(2);


//Differenciate the optionArr and the fileArr
let optionArr = [];
let fileArr = [];
for(let i = 0; i < inputArr.length; i++) {
    if(inputArr[i].charAt(0) == '-')
    {
        optionArr.push(inputArr[i]);
    }
    else{
        fileArr.push(inputArr[i]);
    }
}

//Checking the -n and -b both should not present in the optionArr
if(optionArr.includes('-n') && optionArr.includes('-b'))
{
    console.log("Enter -n or -b , either of the option")
}

//Copying all the files content into one single content string
let content = [];
for(let i = 0 ; i < fileArr.length; i++){
    content+= fs.readFileSync(fileArr[i])+'\r\n';
}

let contentArr = content.split('\r\n');
let tempArr = [];
if(optionArr.includes('-s'))
{
    tempArr.push(inputArr[0]);
    for(let i = 1 ; i < contentArr.length;i++){
        if(contentArr[i] == "" && contentArr[i-1] =="")
        {
            continue;
        }
        else
        {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}
// console.log(contentArr.join("\n"));


if(optionArr.includes('-n'))
{
    for(let i = 0 ; i < contentArr.length ; i++)
    {
        contentArr[i] = `${i+1} ${contentArr[i]}`;
    }
}
// console.log(contentArr.join("\n"))


if(optionArr.includes('-b'))
{
    let counter = 1;
    for(let i = 0 ; i < contentArr.length ; i++)
    {
        if(contentArr[i] != "")
        {
            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;
        }
    }
}
console.log(contentArr.join("\n"))