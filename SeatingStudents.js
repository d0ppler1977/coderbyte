/*
Challenge
Have the function SeatingStudents(arr) read the array of integers stored in arr which will be in the 
following format: [K, r1, r2, r3, ...] where K represents the number of desks in a classroom, 
and the rest of the integers in the array will be in sorted order and will represent the desks
 that are already occupied. All of the desks will be arranged in 2 columns, 
 where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc. 
 Your program should return the number of ways 2 students can be seated next to each other. 
 This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student. 

For example: if arr is [12, 2, 6, 7, 11] then this classrooms looks like the following picture: 

 

Based on above arrangement of occupied desks, there are a total of 6 ways to seat 2 new students next to each other. The combinations are: [1, 3], [3, 4], [3, 5], [8, 10], [9, 10], [10, 12]. So for this input your program should return 6. K will range from 2 to 24 and will always be an even number. After K, the number of occupied desks in the array can range from 0 to K. 
Sample Test Cases
Input:6, 4

Output:4


Input:8, 1, 8

Output:6
*/

function SeatingStudents(arr) {
    const number_of_seats = arr.shift();
    const number_of_rows = Math.round(number_of_seats / 2);
    const seat = [];
    let idx = 0;
    for (row = 0; row < number_of_rows; row ++) {
        seat.push([]);
        for (col = 0; col < 2; col ++) {
            const isOccupied = arr.indexOf(idx + 1) > -1 ? true : false;
            //console.log(row);
            seat[row].push(isOccupied);
            idx ++;
        }
        console.log(seat[row].join("-"));
    }

    let seating = 0;
    for (let i = 0; i < number_of_rows - 1; i ++) {
        if ((seat[i][0] === false) && (seat[i][1] === false)) seating ++;
        if ((seat[i][0] === false) && (seat[i + 1][0] === false)) seating ++;
        if ((seat[i][1] === false) && (seat[i + 1][1] === false)) seating ++;
    }
    // check if last row is empty:
    if ((seat[number_of_rows - 1][0] == false) && (seat[number_of_rows - 1][1] == false)) seating ++;
    return seating;
}

const input = [12, 2, 6, 7, 11];
//const input = [8,1,8];

console.log(SeatingStudents(input));
