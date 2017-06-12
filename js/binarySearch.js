const data = [1, 4, 6, 8, 9, 10, 11, 15, 19, 26, 33];


function binarySearch(data, target) {
  logState(data);
  let midIndex = Math.floor(data.length / 2);
  let comparison = data[midIndex];

  if (target === comparison) {
    return target;
  } else if (data.length === 1) {
    return 'this isn\'t the number you\'re looking for';
  }

  if (target < comparison) {
    return binarySearch(data.slice(0, midIndex), target);
  }

  if (target > comparison) {
    return binarySearch(data.slice(midIndex, data.length), target);
  }
}

function logState(data) {
  console.log('Array state:');
  console.log(data);
}

console.log(binarySearch(data, 33));
