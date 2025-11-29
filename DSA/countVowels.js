// Function to count the number of vowels in a given string

function countVowels(str){
    let count= 0;
    for(const char of str){
        if(char==="a" || char==="e" ||char==="i" ||char==="o" ||char==="u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world")); // Output: 3