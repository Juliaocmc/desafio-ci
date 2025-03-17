export class Math {
    add(a: number, b: number) {
        return a + b
    }

    subtract(a: number, b: number) {
        return a - b
    }

    multiply(a: number, b: number) {
        return a * b
    }


    divide(a: number, b: number) {
        return a / b
    }

    power(a: number, b: number) {
        return a ** b
    }

    squareRoot(a: number) {
        return a ** 0.5
    }
    isEven(a: number) {
        return a % 2 === 0
    }

    isOdd(a: number) {
        return a % 2 !== 0
    }
}

