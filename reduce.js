// const marks = [2,35,2,4,6,3,6,3,654,3,32]

// for(let i=0; i<marks.length; i++ ){
//     console.log(marks[i]);
// } 
// FOREACH
// marks.forEach(function(n){
//     console.log(n)
// });
// // MAP
//  const square = marks.map((n) => n < 30 ? n * n : n);
//  console.log(square)
// FILTER
// const fail = marks.filter((n) => n < 30);
// console.log(fail) 
// for(let i=0; i<marks.length; i++){
//     if(marks[i] < 30){
//         console.log(marks[i]);
//     }
// }
/////    REDUCEEEE
// const sum = marks.reduce(((a,b) => a + b), 0);
// console.log(sum);
// SORTconst sort = list.sort((x, y) => x - y);
// console.log(sort);
// const marks = [45,33,20,77,80,95,40,55,30,22]
//  const sum = marks
//  .sort((a,b) => a - b)
//  .filter((n) => n > 50)
//  .map((n) => n + 10)
//  .reduce((a, b) => a + b, 0);
//  console.log(sum);
//  const marks = [45,33,20,77,80,95,40,55,30,22]
//  marks.pop();
//  console.log(marks);
//  marks.push(999,888,777);
//  console.log(marks);
// let products = [
//     {
//         id: 5, productsName: "logitech Mouse", unitprice: 35
//     },
//     {
//         id: 6, productsName: "logitech keyboard", unitprice: 40
//     },
//     {
//         id: 7, productsName: "logitech webcam", unitprice: 150
//     }
// ];
// products.push({
//     id: 8, productsName: "microsoft", unitprice: 48
// })
// // console.log(products);
// const marks = [45,33,20,77,80,95,40,55,30,22]
// //console.log(marks.indexOf(800));
// const l = marks.indexOf(800);
// console.log(l)
// if( l == -1){
//     marks.push(800);
//     console.log(l)    
// }
// const marks = [45,33,20,77,80,95,40,55,30,22]
// const remain = [60,77];
// const full = marks.concat(remain);
// console.log(full);
// list  = [1,2,3,4,5,6,7,8,9,10]
// list.fill(5,0,10)
// console.log(list);
//  const names = ["nadeem", "tauheed", "abdul samad", "abdul qadir"];
//  const [name1,,,name2] = names;
//  console.log(name1,name2)
// const student_list = {
//     marks: 45,
//     name: 'saud khan',
//     gpa: 3.7,
//     ispass: true,
//     friends: ['abdus samad', 'abdul qadir', 'abdul samad'],
//  address: {
//         city: 'mardan',
//         country: 'pakistan',
//         tehsil: 'katlang',
//     }
// }
// //const {ispass, address} = student_list;
// //console.log(ispass)
// changeMarks(student_list);
// const changeMarks = ({marks, address}) => {
//     Obj.marks = 50

    
// // }
// const str1 = "heloo";
// const str2 = "world";
// const str = "this is a new line."
// //const str3 = str1.concat(str2)
// //const str4 = str1 + str2;
// //const str5 = `${str1} ${str2}`;
// //const l = str.indexOf("test")
// //console.log(l); 
// const l2 = str.replace("new", "old");
// console.log(l2);
// const str = "this is pakistan";
// const country = str.slice(8,16)
// // console.log(country)
// const str = "this is pakistan";
// const string = "1, faizan, laki marwat, 3.5, 6th, ICP"
// const [id, name, address, gpa, semester, institute] = string.split(",");
// const str = string.split(",");
// // console.log(str)
// const name = " faixan "
// const trim = name.trim();
// console.log(trim)
// const  str = "hello world there is new world hello new world";
// const chars = {};
// const arr = str.split(" ");
// for(let word of arr){
//   if(!chars[word]){
//           chars[word] = 1;
//   }
//   else{
//     chars[word]++;
//   }
// }
// console.log(chars); 
// let  str = "h h gg g g j jj h ug g";
// let lastword = getlastword(str);
// //console.log(lastword);
// function getlastword(str){
// let words = str.split(" ");
// //console.log(words)
// let lenofword = words.length;
// let index =  lenofword-1;
// console.log(index)
// return words[index];
// }
// DEFAULT PERIMETER / AURGUMENT
// const fun = (name = "guest") => {
//           console.log(`hello ${name}` )
// }
// fun();
// const str = "saud khan"
// const t = str.search(/[a-z]\s[a-z]/ig)
// console.log(t)
// const list = [1,2,3,4,5,6,7,]
// const list2 = [,5,...list,6,7]
// console.log(list2)
// const  bj1 = {
//     name: "saud khan",
//     age: 20,
//     marks: 30
// }
// const bj2 = {
//     ...bj1,
//     gpa: 3.2,
//     semester: 5
// } 
// console.log(bj2)
// const sum = (a,b,c) => {
//     console.log(a + b + c);
// }
// const values = [10,20,10]
// sum(...values)
// const count = (a,b, ...c) => {
//     console.log(a + b);
//     const s = c.reduce((a,b) => a + b, 0)
//     console.log(s) 
// }
// count(40,50,40,04
// const t = 12.33333;
// const t1 = 23
// const num = t.toFixed(2)
// const num2 = Math.ceil(t)
// const num3 = Math.floor(t)
// console.log(num3) 
// const fs  = require('fs');
// fs.writeFileSync("test.txt", "hello world")
// for(i=0; i<10;i++){
// const r = Math.random();
// console.log(Math.ceil(r*6))
// }
//RANDOM BETTWEEN NUMBERS
// function randomIntFromInterval(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// for(let i = 0; i< 10; i++){
//     console.log(randomIntFromInterval(1,6))
// }
//  const d = new Date();
//  console.log(d.getDate())
//  console.log(d.getFullYear())
//  console.log(d.getHours())
//  console.log(d.getDay())
// const list = [2,3,33,455,67,77,554]
// const min = Math.min(...list)
// console.log(min)
// const s = new Set([1,2,3,4,5,6,7,8,9,10])
// s.add(11)
// s.add(12)
// console.log(s)
//EXAMPLE
// const letters = new Set(["a","b","c"]);
// letters.forEach(function(value){
//     text += value;
// })
// const obj = [{
//     SNo: 1,
//     name: "saud",
//     age: 22,
//     gpa: 3.6
// }]
// const keys = Object.keys(obj)
// for(let i=0; i<obj.length; i++){
//     console.log(obj[i].name)
//     for(o in obj){
//         console.log(obj[0].age)
//     }
// }

// const str = 'pakistan';
// for(let j of str){
//     console.log(j)
// }
