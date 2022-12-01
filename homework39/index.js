const sumAllNumbers = (...rest) => {
    let sum=0;

    for (const restElement of rest) {

        if (typeof(restElement) !== 'number') return 'Error! You can use only numbers.'
        sum += restElement

    }
    return sum
}

console.log(sumAllNumbers(1)) // 1
console.log(sumAllNumbers(1, 2, 3)) // 6
console.log(sumAllNumbers(1, 2, 3, 1, 2, 1, 10)) // 20
console.log(sumAllNumbers(1, '2', 3)) // Error! You can use only numbers.
console.log(sumAllNumbers([1, 2])) // Error! You can use only numbers.
console.log(sumAllNumbers({ number: 1 })) // Error! You can use only numbers.

