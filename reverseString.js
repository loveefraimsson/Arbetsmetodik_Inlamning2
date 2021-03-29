//FUNKTION 4: Returnera omvänt värde
function reverseString(string) {
    let splitTheString = string.split("");
    let inverseArray = splitTheString.reverse();
    let setToString = inverseArray.join("");

    return setToString;
}
//console.log(reverseString("hello"));

module.exports = reverseString;