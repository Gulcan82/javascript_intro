function zaehleBuchstaben(str, buchstabe) {
 
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseLetter = buchstabe.toLowerCase();

  let count = 0;
  
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === lowerCaseLetter) {
      count++;
    }
  }
  return count;
}


console.log(zaehleBuchstaben("Hallo Welt", "l")); 