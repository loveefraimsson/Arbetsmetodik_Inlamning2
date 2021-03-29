//FUNKTION 5: Kontrollera om det är ett palindrom
function checkIfPalindrome(string) {
    // let splitTheString = word.split("");
    // let inverseArray = splitTheString.reverse();
    // let setToString = inverseArray.join("");

    let word = string.split("").reverse().join("");


    if(string == word) {
        return true;
    }
    else {
        return false;
    }
}
//console.log(checkIfPalindrome("anna")); 
module.exports = checkIfPalindrome;