const { returnTwo, greeting, add } = require('./functions');

test('Should return 2', () => {
    expect(returnTwo()).toBe(2);
});

test('Should return "Hello, James"', () => {
    expect(greeting('James')).toEqual("Hello, James");
    expect(greeting('Jill')).toEqual("Hello, Jill");
});

test('Should return 3 and 14', () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
});