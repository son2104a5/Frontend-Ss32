let n = +prompt("nhập số lượng sinh viên muốn thêm");

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

for(let i=1;i<=n;i++){
    let name = prompt(`nhập tên của sinh viên thứ ${i}`);
    let student = new Student(i, name);
    for(let key in student){
        console.log(key, student[key]);
    }
}