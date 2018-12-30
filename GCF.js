function GCF(arr) {
    const factors1 = [];
    for (let i = arr[0]; i > 0; i --) {
        if (arr[0] % i === 0) factors1.push(i);
    }

    const factors2 = [];
    for (let i = arr[1]; i > 0; i --) {
        if (arr[1] % i === 0) factors2.push(i);
    }

    //console.log("factors 1 :" + factors1.join());
    //console.log("factors 2 :" + factors2.join());
    let idx = 0;
    if (factors1[0] > factors2[1]) {
        for (let i = factors2.length; i > -1; i --) {
            if (factors1.indexOf(factors2[idx]) > -1) return factors2[idx];
            idx ++;
        }
    } else {
        for (let i = factors1.length; i > -1; i --) {
            if (factors2.indexOf(factors1[idx]) > -1) return factors1[idx];
            idx ++;
        }
    }

    return 1;
}

const input = [106, 212];

console.log(GCF(input));
