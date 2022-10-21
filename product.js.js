class Product {
    name;
    price;
    qty;

    deliver = () => {

    };
    bill = () => {
        return this.price * this.qty;
         
    };
    discount = () => {
        return this.price * this.qty * 0.1;
    }
}
 
module.exports = Product;