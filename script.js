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

const temp = [17, 21, 23];

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log('...', str);
}

printForecast(temp);

// ------------------------------
