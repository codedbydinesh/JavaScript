function secondLargestWithDuplicates(arr) {
  const digits = arr.filter(n => n >= 0 && n <= 9);

  if (digits.length < 2) return -1;

  const sorted = [...digits].sort((a, b) => b - a);
  return sorted[1]; // second element
}
console.log(secondLargestWithDuplicates([3, 9, 2, 9, 5])); // 9
console.log(secondLargestWithDuplicates([1, 1, 1]));       // 1
console.log(secondLargestWithDuplicates([7]));             // -1
