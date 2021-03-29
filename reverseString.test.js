const reverseString = require("./reverseString");

test("Testar om funktionen returnerar en omvänd sträng",() => {
    expect(reverseString("hello")).toBe("olleh")
})