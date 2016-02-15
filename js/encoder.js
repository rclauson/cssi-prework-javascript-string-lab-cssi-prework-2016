var encode = function(userString){
  //1. Add code to turn string to lowercase
  userString=userString.toLowerCase()
  // 2. Add code to change each instance of a, e, i, o to the appropriate number based on l33n rules
  userString=userString.split('a').join('4');
  userString=userString.split('e').join('3');
  userString=userString.split('i').join('1');
  userString=userString.split('o').join('0');
  // 3. Add code to replace spaces with dollar signs. You can use regex but you don't have to!
  userString=userString.replace(" ", "$");
  //This line assigns the variable encode to the value userString
  return userString
}