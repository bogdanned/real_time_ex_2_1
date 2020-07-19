const {promisify} = require("util");
const setTimeoutPromise = promisify(setTimeout)

function fibo(n) {
    if (n < 2) return 1;
    else return fibo(n - 2) + fibo(n - 1);
}

async function timer(n){
    await setTimeoutPromise(n * 500)
}

async function expensiveTaskList(n, callback) {
    var result = []
    for (let i = 0; i < n; i++) {
        const fiboNumber = fibo(n);

        if (callback) {
            await callback(n, i, fiboNumber);
            await timer(1);
        }
        result.push(fiboNumber);
    }
    return result;
}

module.exports = {
    fibo,
    expensiveTaskList,
};