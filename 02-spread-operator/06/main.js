// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัวi
function cloneArray(array) {
  return [...array];
}
arr = [5, 2, 4, "hong", "ameen"];
const newArr = cloneArray(arr);
console.log(newArr);
