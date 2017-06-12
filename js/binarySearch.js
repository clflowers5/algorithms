const data = [1, 4, 6, 8, 9, 10, 11, 15, 19, 26, 33];


function binarySearch(data, target) {
  let mid = Math.floor(data.length / 2);
  let el = data[mid];
  console.log('eval');
  console.log(data);
  console.log(mid);

  if (el === target) {
    return target;
  } else if (data.length === 1) {
    return 'this isn\'t the number you\'re looking for';
  }

  if (target < el) {
    return binarySearch(data.slice(0, mid), target);
  }

  if (target > el) {
    return binarySearch(data.slice(mid, data.length), target);
  }
}

console.log(binarySearch(data, 33));
