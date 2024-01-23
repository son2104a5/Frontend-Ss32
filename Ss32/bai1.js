let person = {
    id: 1,
    name: prompt("nhập tên"),
    phone: prompt("nhập sđt"),
    address: prompt("nhập địa chỉ"),
}

for(let key in person){
    console.log(key, person[key]);
}