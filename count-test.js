var  countNums = require("./count");

var countNumsTest = function (test, result) {
    // This function tests the countNums function.
    var count = countNums(test);
    if (JSON.stringify(count) === JSON.stringify(result)) {
        console.log("The test Case: " + test + " => DONE.");
    } else {
        console.log("The test Case: " + test + " => Failed.");
        console.log("Your result: " + JSON.stringify(count));
        console.log("It must be: " + JSON.stringify(result) + "\n");
    }
}


// Put the test cases under this comment
// Don't forgot to put the test case in the "testCases" array
// Test cases is an object of 2 keys test and result

test1 = {
    "test": "1,2,3,3,3,3",
    "result": { '1': 1, '2': 1, '3': 4 }
};

test2 = {"test": "2,1,2,3,3,5,7,5",
    "result": {"1": 1, "2": 2, "3": 2, "5": 2, "7": 1}
};

test3 = {
    "test": "",
    "result": {}
};


//Test all test cases in this array
testCases = [test1, test2, test3]
for (var i=0; i < testCases.length; i++) {
    countNumsTest(testCases[i].test, testCases[i].result);
}
