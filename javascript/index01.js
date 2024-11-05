const arr = [3, "4", 5, "6", 7, "8", 9, 10, 11, "12"];
let r = Math.round(Math.random() * (12 - 3) + 3);

for (let i = 0; i < arr.length; i++) {
    if(arr[i]==r){
   console.log(typeof(arr[i])+"  : "+arr[i]);
break;}
}
console.log(5*"8"-4);

//function/////////////////////////////////////
function sum(x,y){
    console.log(x+y);
}
sum(5,6)
//arrow function 
const arrow=(c,v)=>{
console.log(c+v);

}
arrow(22,3)

