/*
Challenge
Have the function ScaleBalancing(strArr) read strArr which will contain two elements, 
the first being the two positive integer weights on a balance scale (left and right sides) 
and the second element being a list of available weights as positive integers. 
Your goal is to determine if you can balance the scale by using the least amount of 
weights from the list, but using at most only 2 weights. For example: 
if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight 
of 5 on the left side and 9 on the right side. It is in fact possible to balance this 
scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. 
Both scales will now equal 11 and they are perfectly balanced. 
Your program should return a comma separated string of the weights that were used from 
the list in ascending order, so for this example your program should return the string 2,6 

There will only ever be one unique solution and the list of available weights will not be empty. 
It is also possible to add two weights to only one side of the scale to balance it. 
If it is not possible to balance the scale then your program should return the string not possible. 
Sample Test Cases
Input:"[3, 4]", "[1, 2, 7, 7]"

Output:"1"


Input:"[13, 4]", "[1, 2, 3, 6, 14]"

Output:"3,6"
*/
function ScaleBalancing(strArr) {
    const weightsOnScale = convertToArray(strArr[0]);
    const weights = convertToArray(strArr[1]);
    const l = weights.length;
    // first see if it is even
    if (weightsOnScale[0] === weightsOnScale[1]) return 0;

    // secondly, lets try to see if we can even it out with one weight
    const idx_of_lowest = weightsOnScale[0] < weightsOnScale[1] ? 0 : 1;
    const idx_of_heighest = weightsOnScale[0] < weightsOnScale[1] ? 1 : 0;
    for (let i = 0; i < l; i ++) {
        if (weightsOnScale[idx_of_lowest] + weights[i] === weightsOnScale[idx_of_heighest]) return weights[i];
    }

    // thirdly, lets see if two of those weights can even things out
    for (let i = 0; i < l; i ++) {
        for (let j = i + 1; j < l; j ++) {
            if (weightsOnScale[idx_of_lowest] + weights[i] + weights[j] === weightsOnScale[idx_of_heighest]) return weights[i] + "," + weights[j];
            if (weightsOnScale[idx_of_lowest] + weights[i] === weightsOnScale[idx_of_heighest] + weights[j]) return weights[i] + "," + weights[j];
            if (weightsOnScale[idx_of_lowest] + weights[j] === weightsOnScale[idx_of_heighest] + weights[i]) return weights[i] + "," + weights[j];
        }
    }
    return "not possible";
}

function convertToArray(str) {
    str = str.replace("[", "");
    str = str.replace("]", "");
    str = str.replace(" ", "");
    return str.split(",").map(Number);
}

const input = ["[13, 4]", "[1, 2, 3, 3, 4]"];
console.log(ScaleBalancing(input));