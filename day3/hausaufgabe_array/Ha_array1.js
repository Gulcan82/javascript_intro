function entferneElement(arr, wert) {
  return arr.filter(element => element !== wert);
}

// Test
console.log(entferneElement([1, 2, 3, 4, 5], 3));

