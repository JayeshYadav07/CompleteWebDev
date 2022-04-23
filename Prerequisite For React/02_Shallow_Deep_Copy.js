let obj = {
    name: "jayesh",
    rollNo: 1,
    languages: {
        1: "hindi",
        2: "English"
    }
}

// let shallowCopy = { ...obj };
// shallowCopy.languages[1] = "Tamil";

// console.log(obj);
// console.log(deepCopy);

let deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.languages["name"] = "English";

console.log(obj);
console.log(deepCopy);