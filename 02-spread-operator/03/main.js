// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator

function abc(name,lastname,...hobby){
    console.log(name,lastname,hobby)
    let result={name,lastname,hobby}
    let countHobby=result.hobby.length
    result={...result,countHobby}
    return result
}
console.log(abc('natthaphong','sinsuphoroek','music','basketball'))
