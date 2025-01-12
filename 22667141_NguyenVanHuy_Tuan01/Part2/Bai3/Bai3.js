const Mark = {
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const John = {
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};


Mark.calcBMI();
John.calcBMI();

if (Mark.bmi > John.bmi) {
    console.log(`Mark's BMI ${Mark.bmi} is higher than John's ${John.bmi}!`);
} else if (Mark.bmi < John.bmi) {
    console.log(`John's BMI ${John.bmi} is higher than Mark's ${Mark.bmi}!`);
} else {
    console.log(`John's BMI ${John.bmi} is equal to Mark's ${Mark.bmi}!`);
}
