const add = require("./sum");

test("Testar om 5 och 7 blir 12",() => {
    expect(add(5, 7)).toBe(12)
})

//console.log(add(6,8));