/*
Challenge
Have the function MissingDigit(str) take the str parameter, which will be a simple mathematical formula with three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation. In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing. For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers and all three numbers will be greater than or equal to 0 and less than or equal to 1000000. 
Sample Test Cases
Input:"4 - 2 = x"

Output:2


Input:"1x0 * 12 = 1200"

Output:0
*/

function MissingDigit(str) {
    const calc = str.split("=");
    const result = Number(eval(calc[0].indexOf("x") > -1 ? calc[1] : calc[0]));
    const expression = calc[0].indexOf("x") > -1 ? calc[0] : calc[1];
    let i = 0;
    while (true) {
        if (eval(expression.replace("x", i)) === result) return i;
        i ++;
    }

}

console.log(MissingDigit(process.argv[2]));