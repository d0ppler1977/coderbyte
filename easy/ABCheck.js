function ABCheck(str) { 
    str = str.trim().toLowerCase();
    str = str.replace(/[^a-z]/g, "c");
    console.log("str = " + str);
    if (/[ab][a-z][a-z][a-z][ab]/g.test(str)) return true;
    else return false;      
}

console.log(ABCheck(process.argv[2]));
