class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if(s.length < t.length)
            return "";    
        const seen = new Map();
        let min= Infinity;
        let minStart = 0;
        let left = 0;
        let count = t.length;
        for(const char of t){
            seen.set(char,(seen.get(char)||0)+1);
        }
        for(let right =0; right< s.length; right ++){
            const charIn = s[right];
            if(seen.has(charIn) && seen.get(charIn) > 0){
                count--;
            }
            seen.set(charIn,(seen.get(charIn)||0)-1);
            while(count === 0){
                if(right - left + 1 < min){
                    min = right - left + 1;
                    minStart = left;
                }
                const charOut = s[left];
                seen.set(charOut,(seen.get(charOut)||0)+1);
                if(seen.get(charOut) > 0){
                    count++;
                }
                left++;
            }
        }
        return min === Infinity ? "" : s.substring(minStart, minStart + min);
    }
}
