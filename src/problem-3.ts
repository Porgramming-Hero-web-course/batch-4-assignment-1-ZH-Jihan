// method 1
function countWordOccurrences1 (sentence:string,word:string) : number {
    let counter : number = 0;
    const sentenceWordList : string[] = sentence.split(" ");
    console.log(sentenceWordList);
    
    for (let index = 0; index < sentenceWordList.length; index++) {
        if (sentenceWordList[index].toLowerCase() === word.toLowerCase()) {
            counter++
        }
    }
    return counter;
}
const repetedWord1 = countWordOccurrences1("TypeScript is great. I love TypeScript!", "typescript")
// console.log(repetedWord1);


/*

when i write and run method 1 funtion then i notice my output showing number 1.
Then I tried to find where the problem was, searched for a long time and after 
reading the task condition carefully, I noticed that the second typescript word 
has a semicolon. Then I started searching on Google how to ignore that word and 
the semicolon? . Then I got acquainted with the regexp constructor and after using 
it, the output looks correct.

*/

// method 2 with RegExp

function countWordOccurrences2 (sentence:string,word:string) : number {
    let counter : number = 0;
    const caseInsensitiveWord = RegExp(`\\b${word}\\b`, 'gi')
    const sentenceWordList : string[] = sentence.split(" ");
    
    for (let index = 0; index < sentenceWordList.length; index++) {
        if (sentenceWordList[index].match(caseInsensitiveWord)) {
            counter++
        }
    }
    return counter;
}
const repetedWord2 = countWordOccurrences2("TypeScript is great. I love TypeScript!", "typescript")
console.log(repetedWord2);

