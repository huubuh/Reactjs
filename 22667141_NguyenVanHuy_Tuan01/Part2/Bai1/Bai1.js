const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolpins avg : ${avgDolphins}`);
        console.log(`Koalas avg : ${avgKoalas}`);
        console.log(`Dolphins win`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolpins avg : ${avgDolphins}`);
        console.log(`Koalas avg : ${avgKoalas}`);
        console.log(`Koalas win`);
    } else {
        console.log('No team wins!');
    }
};

console.log('Test Data 1');
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);
checkWinner(scoreDolphins1, scoreKoalas1);
console.log('Test Data 2');
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);
checkWinner(scoreDolphins2, scoreKoalas2);