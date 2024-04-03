
x1 = 121
x2 = -121
x3 = 10


var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let strX = String(x);
    let left = 0;
    let right = strX.length - 1;

    while (left < right) {
        if (strX[left] !== strX[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome(x1))
console.log(isPalindrome(x2))
console.log(isPalindrome(x3))