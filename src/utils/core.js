function fibo(n) {
    if (n < 2) return 1;
    else return fibo(n - 2) + fibo(n - 1);
}

function expensiveTaskList(n, callback) {
    var result = []
    for (let i = 0; i < n; i++) {
        const fiboNumber = fibo(i);
        if (callback) {
            callback(n, i, fiboNumber);
        }
        result.push(fiboNumber);
    }
    return result;
}

module.exports = {
    fibo,
    expensiveTaskList,
};