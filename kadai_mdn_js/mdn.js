const date = new Date("2024-10-12");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),

];
const formatteDate = date.toLocaleDateString('ja-JP-japanese');
console.log(formatteDate);
