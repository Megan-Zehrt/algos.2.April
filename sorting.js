
var nums1 = [8,1,2,2,3]




var smallerNumbersThanCurrent = function(nums) {
    let newArray=[]
    for(i=0;i<nums.length;i++){
    let count=0
        for(j=0;j<nums.length;j++){
            if(nums[j]<nums[i])
        {
            count++
        }

        }
        if(count===0){
            newArray.push(count)
        }else{
             newArray.push(count)
        }
    }
    return  newArray
};

console.log(smallerNumbersThanCurrent(nums1))