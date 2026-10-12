import { divide } from "../src/calculator.js";

describe("divide", () => {
    it("divides two positive numbers", () => {
        expect(divide(4,2)) .toBe(2);
    });

    it("divides negative numbers", () => {
        expect(divide(-12,4)) .toBe(-3);
    });

    it("divides with a negative number", () => {
        expect(divide(12, -4)).toBe(-3);
    });

    it("throws when dividing with zero", () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
    });
    
    it("throws when inputs are not numbers", () => {
        expect(() => divide("2", 3)).toThrow("Both arguments must be numbers");
    });

    it("throws when inputs are null", () => {
        expect(() => divide(null, 3)).toThrow("Both arguments must be numbers");
    });

    it("throws when inputs are undefined", () => {
        expect(() => divide(undefined, 3)).toThrow("Both arguments must be numbers");
    });
});
