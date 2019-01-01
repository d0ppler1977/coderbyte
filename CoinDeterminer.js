function CoinDeterminer(num) {
    const coins = [1, 5, 7, 9, 11];
    let qty = 0;
    let sum = 0;
    num = Number(num);
    while (sum !== num) {
        //trying first every combo of up to 3 coins
        for (let i = 0; i < 5; i ++) {
            if (sum + coins[i] === num) return qty + 1;
            for (j = 0; j < 5; j ++) {
                if (sum + coins[i] + coins[j] === num) return qty + 2;
                for (k = j; k < 5; k ++) {
                    if (sum + coins[i] + coins[j] + coins[k] === num) return qty + 3;
                }
            }
        }
        const diff = num - sum;
        if (diff >= 11) {
            sum += 11;
        } else if (diff >= 9) {
            sum += 9;
        } else if (diff >= 7) {
            sum += 7;
        } else if (diff >= 5) {
            sum += 5
        } else {
            sum += 1;
        }
        qty ++;
        if (sum === num) break;
    }
    return qty;
}

console.log(CoinDeterminer(process.argv[2]));