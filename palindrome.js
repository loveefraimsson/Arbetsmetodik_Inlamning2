function checkIfPalindrome(string) {
    let word = string.split("").reverse().join("");

    if(string == word) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = checkIfPalindrome;