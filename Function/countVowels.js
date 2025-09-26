function countVowels(str){
    // function for counting vowels present in the string
    let count = 0;

    for(let char of str){
        if(char == "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log("number of vowels present in given string is : " , count);   
}


countVowels("Dinesh Kumar Kori")
