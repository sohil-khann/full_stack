// // //console.log("hi there ");
// //console.log(`hi there `);
// //console.log(Math.pow(6,8));
// //let a = prompt("enter the no "); hamesa ak string return hogi 
// //console.log(Math.round(a));
//  //let b = console.log(Math.round(Math.random () *(15-5) +5 ));
//  //let c = "tanuj sharma ";
//  //let d = "I am in gla ";
//  //console.log(c+d);   
//  //const arr = [1,2,"hii",true,[4,5,false]];
//  //console.log(arr[4]);
//  const arr = [1,2,3,4,5];
//  console.log(arr);
//                                                 destrutive funtions


//  arr.push(6);
//  console.log(arr);



//  arr.pop();
//  console.log(arr);

//  arr.unshift(0);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(1,1);//(starting index , no of element to be deleted)
// console.log(arr);

// arr.splice(1,0,2,6,7,6,6,5,6);//(starting index , mark it 0 if you want to add elements without deleting any element , elements to be added )
// console.log(arr);

// //                                                     non destrutive funtions 

// const isPresent = arr.includes(5);
// console.log(isPresent); // returns boolean wheather the element is present or not

// const sliceArr = arr.slice(3,5); // returns the sub arr from start index to (end index -1)
// console.log(sliceArr); 

// const index = arr.indexOf(3);
// console.log(index);

// const lastIndex = arr.lastIndexOf(6);
// console.log(lastIndex); // give the last index of the element form the array 

// const str = arr.join("-");
// console.log(str); // convert the arr to string seprated by (" value given in this  ")



// // function join (arr) {
// //     arr.reverse();
// //     const nice = arr.concat([" this is a arr converted to string "]);

// //     return nice ;

// // }
// // console.log(join (arr));

// const toSort = [1,2,5,4,6,8,10,20,50,100,200];
// toSort.sort();
// console.log(toSort); // sort ke pass bhot power he srif alphatical order se sort karana nahi 


// //                                                       loops start ho gaye 

// // for(let i = 0 ; i<arr.length; i++){ // normal for loop 
// //     console.log(arr[i]);
// // }

// for (let item of arr ){ // for of loop 
//     console.log(item);
 







//                                                              objects 
// It represetation of real life objects 
// store in key : value pair  keys hamare object me string ki tarah store hota he 
// every key must be unique
// let , var, const {
    //  name: _____;    name is a key  , _________ values he 
    //  roll no : __________; roll no  is a key  , _________ values he 
    //  section : ___________;  section is a key  , _________ values he 
    //  year : _________;  year is a key  , _________ values he 


//                 }

// let obj = {
//     name : "kuch bhi",
//     section : " n",
//     rollno : 67,
//     year: 3
// }
//  console.log(obj);
//  console.log(obj.name); // way no 1  using object 
//  console.log(obj["year"]); // way no 2 using strings 

// let students =[
// {
//     name : " name1",
//     DOB : " 16/10/2004",
//     address: {
//         premanent:{
//             street :3,
//             appartment : "Wz-lshf",
//             floor :3
//         },
//         current :{
//             street :10 ,
//             appartment : "Wd-sfvff",
//             floor :2
//         }
//     }
// },

//     {
//         name : " name2",
//     DOB : " 16/10/2004",
//     address: {
//         premanent:{
//             street :3,
//             appartment : "Wz-lshf",
//             floor :3
//         },
//         current :{
//             street :10 ,
//             appartment : "Wd-sfvff",
//             floor :2
//         }
//     }},
//     {
//         name : " name3",
//     DOB : " 16/10/2004",
//     address: {
//         premanent:{
//             street :3,
//             appartment : "Wz-lshf",
//             floor :3
//         },
//         current :{
//             street :10 ,
//             appartment : "Wd-sfvff",
//             floor :2
//         }
//     }
// }
// ]


// iis tarah se print karna he

// parmanent address of : name
// index.js:122 street :3
// index.js:123 appartment:Wz-lshf
// index.js:124 floor :3
// index.js:125 student name :  name
// index.js:126 street  16/10/2004
// iis tarah se hoga 
// console.log(" parmanent address of :"+student.name);
// console.log("street :"+ student.address.premanent.street);
// console.log("appartment:"+student.address.premanent.appartment);
// console.log("floor :" +student.address.premanent.floor);


// console.log(student name : ${student.name});
// console.log(student DOB ${student.DOB});


// iis tarah se bhi kar sakte he per nahii karna he effcient nahi he 
// console.log(" parmanent address of :"+student.name);
// console.log("street :"+ student.address.premanent.street);
// console.log("appartment:"+student.address.premanent.appartment);
// console.log("floor :" +student.address.premanent.floor);


// ye efficent he 
// console.log(student name : ${student.name});
// console.log(student DOB ${student.DOB});


// for(let student of students){
//     console.log(student name :${student.name});
//     console.log(student address : ${student.address.premanent.street},${student.address.premanent.floor} , ${student.address.premanent.appartment});
//     console.log(` student DOB : ${ student.DOB}`);
//     console.log(" ");
// }
// check the number is +ve or -ve or zero or string 

// isNaN(d)? d<0?console.log("-ve") :d>0? console.log("+ve"): console.log("zero") :console.log("string");
// const arr =[3,'4',5,'6',7,'8',9,'10',11,'12'];
// let a = Math.round(Math.random() * (12-3))+3;
// let i = arr.indexOf(a);
// console.log(a);
// console.log(typeof(arr[i]));    





//                                                   Scopes in js 
// 1. global scopes -> variables functions which are created directly in js file 
// 2. block scope -> created in {} and can only be used in same block not outside the block 
// 3. clouser (lexical) -> used in callback functions 
// note -> var ka by default scopes globle hota he and const,let ka scopes by defult block hota he 



//                                                    funtions 
//     funtion Name(){ your code }
// calling of funtions -> 
// 1.  name(values in this );
// 2.  name.call();


//                                                    Parameters 
//  variables which are passed to funtions 

// function sum(x,y){
//    console.log(x+y);
// }
// sum("5",6);
// function add(x,y,z){
//     console.log(x+y-z);
// }

// add(5,"6",7)

//                                                    return

// it can return any thing even other  function 

// function fun(x,y){
//     return x+y;
// }

// console.log(fun(10,13));

//                                              function overloading
// jab bhi ak hi naam se function banate he or uusme parameters ki length change karte he to uuse overloding of function kehete he 
//                          ye type script me hita he na ki java script me 
// function fun(x,y){
//     return x+y;
// }

// console.log(fun(10,13));
// function fun(x,y,z){
//     return x+y+z;
// }

//                                                    arrow function 
//                        ak baar phadna he


// const arrow = () =>{
//     return "arrow function"
// }
//  let ans = arrow();
//  console.log(ans);

// single line of  statement  return karna hota he to uusme use aate he like this ->
// const arrow =(a,b) => a+b;
// let ans = arrow();
// console.log(ans);

// let arr=[
//     {
//         id: "1",
//         name: "john 1",
//         age : 25
//     },
//     {
//         id: "2",
//         name: "john 2",
//         age : 25
//     },
//     {
//         id: "3",
//         name: "john 3",
//         age : 25
//     },
//     {
//         id: "4",
//         name: "john 4",
//         age : 25
//     }
// ]
// function cb(ele)
// {
//     console.log(hii ${ele.name} id no ${ele.id});
//     return ele.name;
// }
// arr.forEach(cb);
// another syntex 
// arr.forEach(function(ele){
//     console.log(hii ${ele.name} id no ${ele.id});
// })
// another syntex 
// arr.forEach((ele)=>{
//     console.log(hii ${ele.name} id no ${ele.id});
// })
//                                       map 

// let newArr = arr.map((ele)=>{
//     return{
//         newName : ele.name+"doe",
//         newAge : ele.age+10,
//     }
// })
// console.log(newArr);
// question -> return the squre of every element in arr 
// let a =[1,2,3,4,5,6,7,8];
// let newArr =a.map((ele)=>{
// return ele*ele;
// })
    
// console.log(newArr);

//                                                                     Filter

// ak condition ke basis per chije filter hoti he , hamesh ak boolean funtion jayega 
// let a =[1,2,3,4,5,6,7,8];
// function helper(x){
//     return x%2;
// }
// let odd = a.filter(helper);
// console.log(odd);


// let qstn = [" htis", "is", "is", "sh", "sit", "issss"];
// const filteredArr = qstn.filter((ele)=>{
//     return ele.includes("is");
// })
// console.log(filtedArr);



//                                      reduce - arthimatic operation karta he 
// iis me do cheje pass karte he 

// let sum = a.reduce((accum,ele)=>{ return accum+ele},0)
// console.log(sum);

//                               sorting 

// arr.sort(call back funtion aata he or yahi diside krata he kis order me sorting hogi )

// let arr =[13,22,33,1,5,10,2,5];
// let sorted = arr.sort((a,b)=>{// a and b pointer he jo arr ke elements ko point karege 
//     return a-b;// incressing me sort kar dega 
//     //return b-a; descring in kar dega 
// });
// console.log(sorted);

//                                                 Async  js  
//                             promises -> ye ak class he  must quations aate he iise jarur puch jayega 
// there are three states 
// 1 -> resolve , 2 -> reject , 3 -> pending 

// console.log("start");
// // const promise = new promise ( call back funtions)
// const promise = new Promise(( resolve, reject )=> {
//     setTimeout(()=>{
//         let num = Math.random()*10;
//         if (num >5){
//             resolve(num);
//         } else {
//             reject(num);
//         }
//         console.log("end");
//     }, 3000);
    
// });// resolve and reject iis call back funtion ke call back fution he 
// console.log(promise);
//  promise.then((result)=>{ // aagar promise resolve hua to iisme aayega 
//     console.log("resolved");
//     console.log("result");
//  }).catch((error)=>{ // agar reject hua to iiisme aayega 
//     console.log("rejected");
//     console.log("error");
//  })

//                                      api fetch karna 
//   API -> API stands for Application Programming Interface, which is a set of rules that allows software 
// applications to communicate with each other. APIs are used to send and receive data between apps in a standardized way.


//        By promises it is not used generaly because of the length and complexty; thats why we use async funtions


// const fetchPromise = fetch("https://v2.jokeapi.dev/joke/Any?type=single")
// fetchPromise.then((res)=>{
    //                               json => javascript object notation 
//     res.json().then((data)=>console.log(data)).catch((error)=>console.log(error)) the responce from the api can be large or small so the json dont know how much time it will take to convert it in Json that's why res.json is also a promise 
// }).then((error)=>{
//     console.log(error);
// })
//                                           Async funtions-> runs on web Api 
// await -> to wait the next line of code to execute before its block of code 

//  async function first(){
// a type to make async function
//  }
//                                this is a get api

// const first = async ()=>{ // this is async arrow function
// let res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single ");
// let data = await res.json();
// console.log(data.joke);
// }
// first();

//      DOM=> Document Object Model => running Html me aagar kuch bhi change karna he to vo DOM se karte he 
// Document -> html code with css in the form of an object

// //DOM=> Document Object Model => running Html me aagar kuch bhi change karna he to vo DOM se karte he 
// // Document -> html code with css in the form of an object 

// // selectors  
// // 1. getElementById -> single element 
// // 2. getElementsByClassName -> html collections - like list 
// // 3. getElementsByTagName -> html collections - like list 
// // 4. queryselectors -> first matching element 
// // 5.queryselectorsAll -> all matching element - node list ke form me 

// h1 = document.getElementById("head");
// // console.log(h1);

// const paraByClass = document.getElementsByClassName("para");
// // console.log(paraByClass);
// // console.log(paraByClass[0]);

// const paraBytagName = document.getElementsByTagName("p");
// // console.log(paraBytagName);

// const h1Byquery = document.querySelector("#head");
// // console.log(h1Byquery);

// const parabyqueryall = document.querySelectorAll(".para");
// // console.log(parabyqueryall);
// // how to read different properties of tag 

// // console.log(h1.innerText);
// // console.log(h1.innerHTML);
// // console.log(h1.textContent); // don't ingnore white space 
// // console.log(h1.outerHTML);

// console.log(h1.id); // return id of h1 
// console.log(h1.className); // return className of h1 
//                                          event listener

// addEventListener -> to attach an event(any action by the user ) to an element
// const btn = document.getElementById("con");
// btn.addEventListener("click",()=>{
//     document.getElementById("head").innerText = "hello";
// })
