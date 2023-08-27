// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

function multi(...num){
    let result =1;
    for (const ele of num) {
        result*=ele;
    }
    return result;
}
console.log(multi(5,2,3,4))
