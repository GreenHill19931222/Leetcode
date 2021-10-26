function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const s = x.toString();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l += 1;
    r -= 1;
  }
  return true;
}

console.log(isPalindrome(1210));
