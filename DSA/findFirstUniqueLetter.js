let str = "abcdefghabcde";

function findFirstUniqueLetter(s){
    
    let freq = {}

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for(const char of s){
        if(freq[char] === 1){
            return char;
        }
    }
}

let char = findFirstUniqueLetter(str);

console.log(`This is the first unique letter or char : '${char}'`);
