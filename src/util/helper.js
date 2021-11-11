const fs = require("fs");


function longestWord(filePath) {
    let word = null;

    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.log("File not found or file type not supported");
            word = "File not found or file type not supported"
        } 
        else if (data.length == 0) {
            console.log("File is empty!");
            word = "File is empty!"
            return word;
        } else {
            let fileContents = fs.readFileSync(filePath).toString().replace(/\r?\n|\r/g, " ");
            let str = fileContents.split(" ");
            let longest = 0;
            for (let i = 0; i < str.length; i++) {
                if (longest < str[i].length) {
                    longest = str[i].length;
                    word = str[i];
                }
            }
            console.log(word)
            console.log(reverseString(word))

        }
    })

    return word;

    
}

function reverseString(str) {
    if (str.length == 0) {
        console.log("File is empty!");
    } else {
        var splitString = str.split(""); 
        var reverseArray = splitString.reverse(); 
        var joinArray = reverseArray.join(""); 
        return joinArray;
    }   
    
}
/**
 * Expose `read`
 */

module.exports = longestWord;