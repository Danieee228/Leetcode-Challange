const seen = new Map();
let left = 0;
let maxFreq = 0;
let maxLength = 0;
for (let right = 0; right < s.length; right++) {
  const char = s[right];
  seen.set(char, (seen.get(char) || 0) + 1);
  maxFreq = Math.max(maxFreq, seen.get(char));
  if (right - left + 1 - maxFreq > k) {
    seen.set(s[left], seen.get(s[left]) - 1);
    left++;
  }
  maxLength = Math.max(maxLength, right - left + 1);
}
return maxLength;
