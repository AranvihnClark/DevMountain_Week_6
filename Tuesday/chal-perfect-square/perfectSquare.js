const perfectSquare = (num) => {
    // First initialize our parameter into a new variable.
    let nextSquare = Math.sqrt(num);

    // We need to check to make sure the parameter received is a perfect square.
    // If not, we can return "-1" right away.
    if (!Number.isInteger(nextSquare) || num < 0) {
        return console.log(-1)
    }

    // Otherwise, we find the next perfect square.
    nextSquare = Math.pow((nextSquare + 1), 2)

    // Then we return the answer.
    return console.log(nextSquare);
}

perfectSquare(9);    // should return 16 (3x3=9, 4x4=16)
perfectSquare(289);  // should return 324 (17x17=289 18x18=324)
perfectSquare(3000); // should return -1 (sq root of 3000 is 54.77)
perfectSquare(-16);  // should return -1 (can't root a negative number or square to a negative number.)