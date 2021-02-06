function fat(n) {
    let sum = 1
    for (let cont = n; cont >= 1; cont--) {
        sum *= cont
    }

    return sum
}

console.log(fat(5))