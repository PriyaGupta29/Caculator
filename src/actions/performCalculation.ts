const solveSingle = (arr: any) => {
    arr = arr.slice();
    while (arr.length - 1) {
        if (arr[1] === '*') arr[0] = arr[0] * arr[2]
        if (arr[1] === '-') arr[0] = arr[0] - arr[2]
        if (arr[1] === '+') arr[0] = +arr[0] + (+arr[2])
        if (arr[1] === '/') arr[0] = arr[0] / arr[2]
        arr.splice(1, 1);
        arr.splice(1, 1);
    }
    return arr[0];
}

export const solveEquation = (equation: string) => {
    let res = equation.split(/(\+|-)/g).map(x => x.trim().split(/(\*|\/)/g).map(a => a.trim()));
    res = res.map(x => solveSingle(x)); //evaluating nested * and  / operations.
    return solveSingle(res) //at last evaluating + and -
}