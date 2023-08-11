data = '{"name": "mkyong","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';

let obj=JSON.parse(data)

console.log(obj["name"]);//mkyong
console.log(obj.name);//mkyong

console.log(obj["address"].streetAddress);
console.log(obj.address.streetAddress);


console.log(obj.phoneNumber[0].type+"    "+obj.phoneNumber[0].number);

