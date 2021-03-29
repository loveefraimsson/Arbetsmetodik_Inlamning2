const add = require("./sum");

test("Testar om 5 + 7 blir 12",() => {
    expect(add(5, 7)).toBe(12)
})
