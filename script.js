function indexOfIgnoreCase(s1, s2) {
  // write your code here
	function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    
    // Find the index of the first occurrence of lowerSubStr in lowerStr
    const index = lowerStr.indexOf(lowerSubStr);
    
    // Return the index or -1 if not found
    return index;
	
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
