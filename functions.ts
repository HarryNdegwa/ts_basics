function sayHelloo(name?: string) {
  if (name === undefined) {
    console.log("Helloo from typescript");
  } else {
    console.log("Helloo from ", name);
  }
}

sayHelloo("Mike");

function summation(...nums: number[]) {
  let sum: number = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log(sum);
}

summation(1, 2, 3, 4, 5);
