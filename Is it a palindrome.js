function isPalindrome(x) {
  // your code here
  let word = x.toLowerCase();
  let wordInverse = word.split('').reverse().join('');
  if (word === wordInverse){
    return true;
  }else{
    return false;
  }
}

console.log(isPalindrome("Luis"));