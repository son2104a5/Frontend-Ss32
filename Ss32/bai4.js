class Library{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let book1 = new Library(1, "Đắc nhân tâm", 123.000, 100);
let book2 = new Library(2, "Nhà giả kim", 125.000, 50);
let book3 = new Library(3, "Doraemon", 25.000, 1000);
let book4 = new Library(4, "Shin cậu bé bút chì", 25.000, 200);

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);