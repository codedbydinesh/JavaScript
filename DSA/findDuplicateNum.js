let arr = [1, 2, 3, 4, 3, 2, 6, 7, 8, 6, 9, 9, 9, 9, 9, 6]
function findDuplicate(arr) {
    let ar = [];
    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = a + 1; b < arr.length; b++)
            if (arr[a] === arr[b] && !ar.includes(arr[a])) {
                ar.push(arr[a])
            }
    }
    return ar
}
console.log(findDuplicate(arr));