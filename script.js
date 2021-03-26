//FUNKTION 1: Addera två tal
function add(a, b) {
    return a + b;
}
console.log(add(4,5));



//FUNKTION 2: Subtrahera två tal
function substract(a, b) {
    return a - b;
}
console.log(substract(4,5));



//FUNKTION 3: Dividera två tal
function divide(a, b) {
    return a / b;
}
console.log(divide(10,5)); 



//FUNKTION 4: Returnera omvänt värde
function reverseString(string) {
    let splitTheString = string.split("");
    let inverseArray = splitTheString.reverse();
    let setToString = inverseArray.join("");

    return setToString;
}
console.log(reverseString("hello"));



//FUNKTION 5: Kontrollera om det är ett palindrom
function checkIfPalindrome(word) {
    // let splitTheString = word.split("");
    // let inverseArray = splitTheString.reverse();
    // let setToString = inverseArray.join("");

    let wordToCheck = reverseString(word);

    if(word == wordToCheck) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkIfPalindrome("anna")); 