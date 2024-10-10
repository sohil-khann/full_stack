 s=4030
 n=130
 console.log("hello world"+s+n)
 console.log(Math.floor(1.9999))
 console.log(Math.pow(2,6))
 console.log(Math.ceil(1.0001))
 console.log(Math.round(1.5))
 // print within a range
 console.log(Math.round(Math.random()*(15-5))+5);

 const str="this is a javascript";
 console.log(str.includes("this is")); //  for searching, it returns boolean
 // a.concat(b) is used in const var

 console.log(str.substring(0,8));
 console.log(str.slice(0,5));  // end index is exclusive
 console.log(str.startsWith("this")); // return boolean
 console.log(str.endsWith("this")); // return boolean
 console.log(str.indexOf("is"));
 const str1="tthis is a ";
 console.log(str1.replace("is","si"));
 console.log(str1.replaceAll("is","si"));

console.log(str.split(" "));// convert string to array 
// destrusctive methods : all cjanges relects in main var

const arr=[1,2,3,45,6,7]
arr.push(8)
console.log(arr);
const a=arr.pop()
const str2=arr.join(" ");// it converts array to String
console.log(str2);

let newarr=["this","is","new","array"];
let combined=newarr.concat(["hi","hello"],arr);
console.log(combined);

let rev=arr.reverse()
console.log(arr.sort());

//////////////////////Loop///////////////Loop//////////////////////////////Loop/////////////////////////////////
//for loop

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//for of loop
for(let item of arr){
console.log(item);
}
