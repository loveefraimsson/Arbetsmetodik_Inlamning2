const palindrome = require("./palindrome");

test("Testar om ordet är ett pallindrom",() => {
    expect(palindrome("anna")).toBeTruthy();
})