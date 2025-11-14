
function learn_exceptions() {
    throw new Error('This is not accepted here');
}

test("Exception Testing", () => {
    expect(() => learn_exceptions()).toThrow();
    expect(() => learn_exceptions()).toThrow(Error);
});
