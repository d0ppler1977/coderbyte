function FibonacciChecker(num) {
    num = Number(num);
    const fibo = [1 , 2];
    let fiboNum = 0;
    let idx = 1;
    if ((num === 1) || (num === 2)) return "yes";
    while (fiboNum <= num) {
        fiboNum = fibo[idx - 1] + fibo[idx];
        if (fiboNum === num) return "yes";
        idx ++;
        fibo.push(fiboNum);
    }
    return "no";
}

console.log(FibonacciChecker(process.argv[2]));
