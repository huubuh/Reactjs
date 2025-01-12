console.log("Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.")
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Mark's BMI: ${markBMI1}, John's BMI: ${johnBMI1}, Mark has higher BMI: ${markHigherBMI1}`);


console.log("Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.")
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Mark's BMI: ${markBMI2}, John's BMI: ${johnBMI2}, Mark has higher BMI: ${markHigherBMI2}`);
if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}

if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}