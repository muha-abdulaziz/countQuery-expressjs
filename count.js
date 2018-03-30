var countNums = function (strOfNum) {
    // This function takes a String of numbers sperated by commas
    // and return an object of its digits count
    // input => "1,2,3,3,2"
    // output => {"1", 1, "2", 2, "3", 2}

    // return empty object if the strOfNum is empty
    if (strOfNum.length === 0) return({});

    // splint the string
    // nums tpyeof array
    var nums = strOfNum.split(",");
    
    var count = {};
    for(var i=0; i < nums.length; i++) {
        
        var num = nums[i];
        if (count[num]) {
            //increment the number of the digit
            count[num] += 1;
        } else {
            //add the digit to the count object
            count[num] = 1;
        } //enf of if-else
    } //enf of for

    return(count)
}

module.exports = countNums;

