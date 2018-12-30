function AdditivePersistence(num) { 
    let steps = 0;
    while (num > 9) {
        let length = num.length;
        let test = 0;
        for (let i = 0; i < length; i++) {
            test += parseInt(num[i]);
        }
        num = test;
        steps++;
    }
    return steps;
}
console.log(AdditivePersistence(process.argv[2]));
