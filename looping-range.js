
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

