// import Product from './Product'; ES6 node js not supported7yyu8
const  Product = require('./product.js') // ES5 supported by node js

// create a new instance of product  

const p1 = new Product();  // p1 is reference variable / pointer varibale and instance f prod 
p1.name = 'Product 1';
p1.price = 100;
p1.qty = 10;
const bill = p1.bill();
const p2 = new Product();
p2.name = "digital watch";
p2.price = 2000;
p2.qty = 1;
p2.discount();
    

// console.log(p2.bill());
//   console.log(p2.discount());
  const s = p2.price - p2.discount()
  console.log(`discount rate: ${s}`)

//console.log(p2)

//console.log(bill);