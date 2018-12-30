function ApproachingFibonacci(arr) { 
    
    let total = 0;
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        total += parseInt(arr[i]);
    }

    const fibo = [1,2];
    let fiboNum = 0;
    let idx = 2;
    while(parseInt(fiboNum) < parseInt(total)) {
        fiboNum = parseInt(fibo[idx - 2]) + parseInt(fibo[idx - 1]);
        fibo.push(fiboNum);
        idx ++;
    }
    if (total === 1) return 0;
    else if (total === 2) return 0;
    else return fiboNum - total;
}
inputParam = [15, 1, 3];

console.log(ApproachingFibonacci(inputParam));
