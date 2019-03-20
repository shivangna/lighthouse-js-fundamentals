
function range (start, end, step) {
  if (start === undefined || step === undefined || end === undefined) {
    return ([]);
  } else if (start > end) {
    return ([]);
  } else if (step < 0) {
    return ([]);
  }
    else {
    var array = [start];
    var increment = start + step;
    while (increment <= end) {
      array.push(increment);
      increment = increment + step;
    }
    // array.push(end);
    return (array)
  }
}

range (10, 30, 5);

// var chorus = "Let's dance!";
// var repeat = 0;
// while (repeat < 10) {
//   if (repeat === 5) {
//     console.log("*change key*");
//   }
//   console.log(chorus);
//   repeat++;
// }
// console.log("Until the sun comes up!");



// var chorus = "Let's dance!";
// for (var repeat = 0; repeat < 10; repeat++) {
//   console.log(chorus);
// }
// console.log("Until the sun comes up!");

