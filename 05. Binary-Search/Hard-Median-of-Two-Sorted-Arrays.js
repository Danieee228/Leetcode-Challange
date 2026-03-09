class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        if(A.length > B.length){
            let tmp = A;
            A = B;
            B = tmp;
        }
        const total = A.length + B.length;
        const half = Math.floor(total / 2);
        let l = 0;
        let r = A.length;
        while (l <= r){
            const i = Math.floor((l + r) / 2);
            const j = half - i;
            const ALeft = (i===0) ? -Infinity : A[i - 1];
            const ARight =  (i===A.length) ? Infinity : A[i];
            const BLeft = (j===0) ? -Infinity : B[j - 1];
            const BRight = (j===B.length) ? Infinity : B[j];
            if(ALeft <= BRight && BLeft <= ARight){
                if(total % 2 !== 0){
                    return Math.min(ARight, BRight);
                }
                return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) /  2;
            }
            else if(ALeft > BRight){
                r = i - 1;
            }
            else{
                l = i + 1;
            }
        }
        return 0;
    }
}
