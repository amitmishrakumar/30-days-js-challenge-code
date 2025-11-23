// number 
let a = 4;
console.log(typeof(a));

// string 
let str = "amit";
console.log((typeof (str)));

//boolen
let isvaild = true;
console.log(typeof(isvaild));

// undifind
let empId;
console.log(typeof(empId));

// null 

let empty = null;
console.log(typeof(empty));


//biging 2 ki power 53

// symble

let id1 = Symbol("id")
let id2 = Symbol("id")
console.log(id1===id2);

console.log(typeof(id1));



// non premitive data types

//1 array 
let arr = ["amit", 55, true]
console.log(arr);
console.log(typeof(arr));


// 2 object 
let user = {
    name: "yash",
    age: 23,
    category: "gen",
    isvaild:true
}
console.log(user);
console.log(typeof(user));
console.log(user.category);


// 3 function

let funValue=function add() {
    console.log(1+5);  
}
console.log(funValue());
  


// inmutable vs mutable

let s = "yash"
s[1] = "m";
console.log(s);
