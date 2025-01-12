console.log("Data 1: Dolphins 96, 108, 89, Koalas 88, 91, 110")

function calculateWinner(a, b, c, d, e, f) {
    const averageDolphins = (a + b + c) / 3

    const averageKoalas = (d + e + f) / 3

    if (averageDolphins > 100 && averageDolphins > averageKoalas) {
        console.log(`Dolphins are winner with ${averageDolphins} and Koalas ${averageKoalas}`)
    } else if (averageKoalas > 100 && averageKoalas > averageDolphins) {
        console.log(`Koalas are winner with ${averageKoalas} and Dolphins ${averageDolphins}`)
    } else if (averageKoalas > 100 && averageDolphins > 100 && averageKoalas === averageDolphins) {
        console.log(`Draw, Dolphins: ${averageDolphins} and Koalas: ${averageKoalas}`)
    } else {
        console.log(`No winner because both are under 100 points`)
    }
}

calculateWinner(96, 108, 89, 88, 91, 110)

console.log("Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123")
calculateWinner(97, 112, 101, 109, 95, 123)

console.log("Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106")
calculateWinner(97, 112, 101, 109, 95, 106)


