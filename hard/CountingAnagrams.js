/*
Challenge
Have the function CountingAnagrams(str) take the str parameter and determine how many anagrams 
exist in the string. 
An anagram is a new word that is produced from rearranging the characters in a different word, 
for example: cars and arcs are anagrams. 
Your program should determine how many anagrams exist in a given string and 
return the total number. 
For example: if str is "cars are very cool so are arcs and my os" 
then your program should return 2 because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd anagram. 
The word "are" occurs twice in the string but it isn't an anagram because it is the same word just repeated. 
The string will contain only spaces and lowercase letters, no punctuation, numbers, or uppercase letters. 

Hard challenges are worth 15 points and you are not timed for them.
Sample Test Cases
Input:"aa aa odg dog gdo"

Output:2


Input:"a c b c run urn urn"

Output:1

1. For the input "mom omm mmo pop opp" your output was incorrect. The correct answer is 3.
2. For the input "aa aa odg dog god" your output was incorrect. The correct answer is 2.
3. For the input "abcd abdc bcda adbc abbc" your output was incorrect. The correct answer is 3.
*/

function CountingAnagrams(str) {
    const words = str.split(" ");
    const l = words.length;
    let count = 0;
    const anagrams = [];
    // checking every word against each other wether it's an anagram or not
    for (let i = 0; i < l; i ++) {
        for (let j = i + 1; j < l; j ++) {
            if (isAnagram(words[i], words[j])) {
                if(!isAnagramInList(anagrams, words[i], words[j])) {
                    anagrams.push({ word1 : words[i], word2 : words[j]} );
                    count ++;
                }
            }
        }
    }
    console.log(anagrams);
    return count;
}

function isAnagramInList(anagrams, word1, word2) {
    let retval = false;
    anagrams.forEach(function(w) {
        if (((w.word1 === word1) || (w.word1 === word2)) && ((w.word2 === word1) || (w.word2 === word2))) retval = true; // we need to check this first, because isAnagram return false if it's the same word. But we should not accept similar words in this list
    });
    return retval;
}

function isAnagram(str1, str2) {
    if (str1.length !== str1.length) return false;
    if (str1 === str2) return false;
    const list1 = str1.split("");
    const list2 = str2.split("");
    list1.forEach(function(char) {
        const idx = list2.indexOf(char);
        if (idx > -1) list2.splice(idx, 1);
        else return false;
    });
    if (list2.length === 0) return true;
    else return false;

}

console.log(CountingAnagrams(process.argv[2]));