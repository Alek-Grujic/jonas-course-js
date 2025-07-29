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

// Koja je najbolja metoda da se ovo uradi?
//

// function AnalyzeWorkWeek() {
//   this.totalHours = function (array) {
//     const sum = array.reduce((acc, curr) => acc + curr);
//     if (array.length > 7) {
//       throw new Error('Array has more than 7 digits!');
//     }
//     return sum;
//   };
//   this.averageDailyHours = function (array) {
//     if (array.length > 7) {
//       throw new Error('Array has more than 7 digits!');
//     }
//     const average = array.reduce((acc, curr) => acc + curr);
//     const twoDecimels = average / 7;
//     return twoDecimels.toFixed(2);
//   };
// }
// const markDate = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const mark = new AnalyzeWorkWeek();

// console.log(mark.totalHours(markDate));
// console.log(mark.averageDailyHours(markDate));
// console.log(mark);

// function AnalyzeWorkWeek(array) {
//   let days = [
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday',
//     'sunday',
//   ];
//   this.arr = array;
//   this.totalWorkHours = this.arr.reduce((acc, curr) => acc + curr);
//   this.averageDailyHours = parseFloat((this.totalWorkHours / 7).toFixed(2));
//   this.dayMostHours = this.arr.reduce((acc, curr) => (acc > curr ? acc : curr));
//   Object.defineProperty(this, 'info', {
//     get: function () {
//       if (array.length > 7) {
//         throw new Error('Array has more than 7 digits!');
//       }
//       console.log(`Total work hours: ${this.totalWorkHours}
// Average daily hours: ${this.averageDailyHours}`);
//     },
//   });
// }
// const mark = new AnalyzeWorkWeek([7.5, 8, 6.5, 0, 8.5, 4, 0]);

// console.log(mark);
// mark.info;

// ---------- functional programming

const array = [7.5, 8.5, 6.5, 0, 8.5, 4, 0];

function analyzeWorkWeek(arr) {
  // total work hours
  const totalWorkHours = arr.reduce((acc, curr) => acc + curr);
  console.log(`Total hours worked: ${minutes(totalWorkHours)}`);

  // average daily hours
  const averageDailyHours = (totalWorkHours / 7).toFixed(2);
  console.log(`Average daily hours: ${minutes(averageDailyHours)}`);

  // The day with the most hours worked
  dayMostHours(arr);
}

// function that turns numbers into hours and minutes
function minutes(number) {
  const fullHours = Math.floor(Number(number));
  const remainingMinutes = Math.round((number - fullHours) * 60);
  return `${fullHours}h ${remainingMinutes}min`;
}

// function that analyze which day has most hours
function dayMostHours(arr) {
  let days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const day = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
  let maxDay = [];
  arr.forEach((hour, index) => {
    if (hour === day) {
      maxDay.push(days[index]);
    }
  });
  const stringed = maxDay.join(', ');
  console.log(`The day with most hours done: ${stringed} - ${minutes(day)}`);
}

analyzeWorkWeek(array);
