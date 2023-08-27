// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)
let obj1 = {name: 'Natthaphong',age:20}
let obj2 = {lastname: 'Sinsupharoek',age:30}
let obj3 = {age:40}
function mergeObjects(...obj){
    obj.reverse()
    // console.log(obj)
    result ={}
    for(let ele of obj){
        result = {...result,...ele}
    }
    return result
}
console.log(mergeObjects(obj1,obj2,obj3))