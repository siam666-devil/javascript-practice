// Find middle number of an array

// let arr = [1, 2, 3, 4, 5, -1, 8,234,345,5,4,3];
// var len = arr.length;
// if (len % 2 == 1) {
//   const midPoint = Math.round(len / 2)
//   console.log(arr[midPoint - 1])
// } else {
//   console.log('there is no mid point number')
// }


// find middle number of an array
let arr = [21, 43, 534]
let tempArr = []
for (let i = 0; i < arr.length / 2; i++) {
    tempArr.push(arr[i])
}
console.log(tempArr[tempArr.length - 1])