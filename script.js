function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  
  // Find the index of the first occurrence of lowerS2 in lowerS1
  const index = lowerS1.indexOf(lowerS2);
  
  // Return the index or -1 if not found
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
