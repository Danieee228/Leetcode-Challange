class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let r = s.length - 1;
        let l = 0;
        while(l < r){
           let temp = s[r];
           s[r] =s[l];
           s[l] = temp;
            l++;
            r--; 
        }
    }
}
