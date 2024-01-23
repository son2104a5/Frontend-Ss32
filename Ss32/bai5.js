class Library{
    constructor(author, name){
        this.author = author;
        this.name = name;
    }
}

let book1 = new Library('Dale Carnegie', "Đắc nhân tâm");
let book2 = new Library('Paulo Coelho', "Nhà giả kim");
let book3 = new Library('Fujiko F. Fujio', "Doraemon");
let book4 = new Library('Usui Yoshito', "Shin cậu bé bút chì");

let Storages = [book1, book2, book3, book4];

let ans = prompt("nhập tên tác giả muốn tìm");

let flag = false;

for(let i=0;i<Storages.length;i++){
    if(Storages[i].author === ans){
        console.log(Storages[i]);
        flag = true;
        break;
    }
}
if(flag == false){
    console.log("Không tìm thấy sách");
}