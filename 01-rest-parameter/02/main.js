// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
function filterOutOdds(...num){
    result=[];
    for(let ele of num){
        if(ele%2==0){
            result.push(ele)
        }
    }
    return result;
}
console.log(filterOutOdds(5,4,7,8,9,9,2,1,3,5))