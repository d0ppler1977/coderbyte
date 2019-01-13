/*Challenge
Have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order. 
Sample Test Cases
Input:"12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"

Output:"00:30"


Input:"12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"

Output:"00:04"
*/

function MostFreeTime(arr) {
    const events = [];

    arr.forEach(function(event) {
        event = event.split("-");
        events.push({ start : get24Time(event[0]), end : get24Time(event[1]) });
    });

    events.sort(function(a, b) {
        return a.start > b.start;
    });

    const ubound = events.length;
    let freetime = 0;
    for (let i = 1; i < ubound; i ++) {
        const diff = getDiffInMinutes(events[i - 1].end, events[i].start);
        if (diff > freetime) freetime = diff;
    }
    return getHHMMFromMinutes(freetime);
}
// help functions
function getHHMMFromMinutes(num) {
    let hour = Math.floor(num / 60);
    let minutes = num % 60;
    
    if (hour.toString().length === 1) hour = "0" + hour;
    if (minutes.toString().length === 1) minutes = "0" + minutes;
    return hour + ":" + minutes;
}

function getDiffInMinutes(timeStr1, timeStr2) {
    const t1 = timeStr1.split(":");
    const t2 = timeStr2.split(":");
    const h1 = Number(t1[0]);
    const m1 = Number(t1[1]);
    const h2 = Number(t2[0]);
    const m2 = Number(t2[1]);
    const diff = ((h2 - h1) * 60) + m2 - m1;
    return diff;
}

function get24Time(s) {
    const t = s.split(":");
    if ((t[1].indexOf("PM") > 0) && (t[0] < 12)) t[0] = Number(t[0]) + 12;
    else if ((t[1].indexOf("AM") > 0) && (t[0] > 11)) t[0] = Number(t[0]) + 12;

    if (t[0] === 24) t[0] = "00";
    return t[0] + ":" + t[1].substring(0, 2);
}

//const input = ["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"];
const input = ["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"];
//const input = ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"];
console.log(MostFreeTime(input));
