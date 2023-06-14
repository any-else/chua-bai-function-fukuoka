// //bai 1

// // function displayName(str) {
// //   return str;
// // }
// // const displayName2 = (str) => {
// //   return str;
// // };

// // console.log(displayName("Xin chào Rikkei Academy"));
// // console.log(displayName2("Xin chào Rikkei Academy"));

// //bai so 2

// // const calcSquare = (number) => {
// //   return number * number;
// // };

// // console.log("binh phuong cua mot so la", calcSquare(4));

// //bài số 3:
// //cho phep nguoi dung nhap vao
// let year = +prompt("Vui lòng nhập năm để tính ra thế kỷ");

// const centuryFormYear = (years) => {
//   return Math.ceil(years / 100);
// };

// console.log("số năm bạn vừa nhập thuộc vào thế kỷ", centuryFormYear(year));

//bài số 4

// function sliceStr(str) {
//   //hàm có sẵn của javascript dành cho kiểu dữ liệu string
//   //nhận vào hai đối số, thứ nhất là chỉ số index bắt đầu để cắt, tham số thứ haui là
//   // chỉ số index => cắt tới đấy thôi
//   // hoàn toàn có thể sử dụng vòng lặp for(..i) để xử lý vấn đề trên
//   if (str.length > 15) {
//     return str.substring(0, 10) + "...";
//   }

//   return str;
// }

// console.log("chuoi dai", sliceStr("Rikkei Academy Vip Pro"));
// console.log("chuoi ngan", sliceStr("NV VU"));

//bài số 5

// const capitalizeFirstString = (word) => {
//   //lấy ra chữ đầu tiên biến nó thành chữ viết hoa
//   let wordFirst = word.charAt(0).toUpperCase();
//   //lấy ra các chữ cái còn lại biến thành viết thường
//   let otherWord = word.slice(1).toLowerCase();
//   return wordFirst + otherWord;
// };
// console.log(capitalizeFirstString("rIkKEi"));

//bài số 6

// function findMaxNumberInArr(arr) {
//   if (arr.length == 0) return;

//   let maxNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }

//     //câu lệnh cấu trúc câu điều kiện bước này ko cần else
//   }

//   return maxNumber;
// }

// console.log(findMaxNumberInArr());
// const test = [4, 5, 90, 93, 173, 38];

// // console.log(Math.max(...test));

// test.sort((a, b) => {
//   return b - a;
// });

// console.log(test[0]);

//bài số 7
//check chẵn lẻ

// const isCheckEvenNumber = (number) => {
//   if (number % 2 == 0) {
//     return "Số Chẵn";
//   } else {
//     return "Số Lẻ";
//   }
// };

// console.log("check số chẵn số lẻ", isCheckEvenNumber(56));
// //số nguyên tố

// const isCheckPrime = (number) => {
//   if (number <= 1) return "Đây không phải số nguyên tố";

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i == 0) {
//       return "Đây không phải số nguyên tố";
//     }
//   }
//   return "Đây là số  nguyên tố";
// };

// console.log("Kiểm tra số nguyên tố", isCheckPrime(8));

// //số hoàn hảo
// const isCheckPerfect = (number) => {
//   if (number <= 1) return "Số này không phải số hoàn hảo";
//   let sum = 1;
//   for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
//     if (number % i == 0) {
//       sum = sum + i;
//       if (i !== number / i) {
//         sum = sum + number / i;
//       }
//     }
//   }

//   if (sum == number) {
//     return "Đây là Số hoàn hảo";
//   } else {
//     return "Đây là số không hoàn hảo";
//   }
// };

// console.log(isCheckPerfect(10));

//bài sô 8

function calcAverageArr(arr) {
  if (arr.length == 0) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let averageNumber = sum / arr.length;
  return averageNumber;
}

console.log(calcAverageArr([3, 3, 3]));
