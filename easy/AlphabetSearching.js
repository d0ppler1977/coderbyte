function AlphabetSearching(str) { 
    str = str.toLowerCase();
    for (let i = 97; i < 123; i++) {
        if (str.indexOf(String.fromCharCode(i)) < 0) return false;
    }
    // code goes here  
    return true;
}

console.log(AlphabetSearching(process.argv[2]));
