// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม
function removeRandom(...arr) {
  let randomIndex = Math.trunc(Math.random() * arr.length);
  //   console.log(randomIndex);
  arr.splice(randomIndex, 1);
  console.log(arr);
  return arr;
}
removeRandom(3, 5, 9, 11, 14, 15, 16);
