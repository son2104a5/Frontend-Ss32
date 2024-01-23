class Stores{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let phone1 = new Stores(1, 'Iphone15', 35000000);
let phone2 = new Stores(2, 'Iphone14 Pro Max', 26700000);
let phone3 = new Stores(3, 'Samsumg S22 Ultra', 34250000);
let phone4 = new Stores(4, 'Asus ROG', 50000000);
let shop = [phone1, phone2, phone3, phone4];
console.log('Before:');
console.log(phone1);
console.log(phone2);
console.log(phone3);
console.log(phone4);
shop.sort((a,b) => a.price - b.price);
console.log('After:');
for(let index in shop)(
    console.log(shop[index])
)