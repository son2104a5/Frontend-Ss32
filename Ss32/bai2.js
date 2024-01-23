let person = {
    id: 1,
    name: "Duck",
    phone: '0123456789',
    address: '22 Trần Phú, Hà Đông, Hà Nội',
}
console.log('Ban đầu');
for(let key in person){
    console.log(key, person[key]);
}

delete person.address;

person.email = "duckngu@gmail.com";
console.log('Sau cập nhật');
for(let key in person){
    console.log(key, person[key]);
}