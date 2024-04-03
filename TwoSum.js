var sum1 = [2,7,11,15]
var sum2 = [3,2,4]
var sum3 = [3,3]
var sum4 = [1, 2, 1, 1, 4, 8, 1]

var target1 = 9
var target2 = 6
var target3 = 6
var target4 = 9

var twoSum = function(nums, target) {
    
    let result = []

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            while(j < nums.length){
                if(j == i){
                j ++
                }
                let main = nums[i]
                let compare = nums[j]
                let sum = main + compare
                if(sum == target){
                    result.push(i)
                    result.push(j)
                    return result
                }
                else{
                    j++
                }
            }
            i++
            j = 0
        }
    }
};

console.log(twoSum(sum1, target1))

console.log(twoSum(sum2, target2))

console.log(twoSum(sum3, target3))

console.log(twoSum(sum4, target4))