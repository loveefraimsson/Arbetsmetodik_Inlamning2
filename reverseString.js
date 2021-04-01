function reverseString(string) {
    let splitTheString = string.split("");
    let inverseArray = splitTheString.reverse();
    let setToString = inverseArray.join("");

    return setToString;
}

module.exports = reverseString;