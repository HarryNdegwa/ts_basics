function sayHelloo(name) {
    if (name === undefined) {
        console.log("Helloo from typescript");
    }
    else {
        console.log("Helloo from ", name);
    }
}
sayHelloo("Mike");
function summation() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log(sum);
}
summation(1, 2, 3, 4, 5);
