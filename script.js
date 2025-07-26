const temp = [17, 21, 23];

function printForecast(arr) {
  //   let days = 1;
  //   for (let key of arr) {
  //     console.log(`${key}C in ${days++} days`);
  //   }
  const array = arr.forEach((arr, index) => {
    console.log(`${arr}C in ${index + 1} days`);
  });
}

printForecast(temp);
// console.log(printForecast(temp));
