// const temp = [17, 21, 23];

// function printForecast(arr) {
//   //   let days = 1;
//   //   for (let key of arr) {
//   //     console.log(`${key}C in ${days++} days`);
//   //   }
//   const array = arr.forEach((arr, index) => {
//     console.log(`${arr}C in ${index + 1} days`);
//   });
// }

// printForecast(temp);

// ------------------------------

// const temp = [17, 21, 23];

// function printForecast(arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} days ...`;
//   }
//   console.log('...', str);
// }

// printForecast(temp);

// ------------------------------

// Time tracking app for freelancers

function AnalyzeWorkWeek() {
  this.totalHours = function (array) {
    const sum = array.reduce((acc, curr) => acc + curr);
    if (array.length > 7) {
      throw new Error('Array has more than 7 digits!');
    }
    return sum;
  };
  this.averageDailyHours = function (array) {
    if (array.length > 7) {
      throw new Error('Array has more than 7 digits!');
    }
    const average = array.reduce((acc, curr) => acc + curr);
    const twoDecimels = average / 7;
    return twoDecimels.toFixed(2);
  };
}
const markDate = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const mark = new AnalyzeWorkWeek();

console.log(mark.totalHours(markDate));
console.log(mark.averageDailyHours(markDate));
