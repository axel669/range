const range = require("../index.js");

describe("Simple ranges", () => {
    describe("from 0", () => {
        describe("to positive", () => {
            it("one arg", () => {
                expect(range(5))
                    .toEqual([0, 1, 2, 3, 4]);
            });

            it("two args", () => {
                expect(range(0, 5))
                    .toEqual([0, 1, 2, 3, 4]);
            });
        });

        it("to negative", () => {
            expect(range(0, -5))
                .toEqual([0, -1, -2, -3, -4]);
        });

        it("descending", () => {
            expect(range(5, 0))
                .toEqual([5, 4, 3, 2, 1]);
        });
    });

    describe("start positive", () => {
        it("ascending", () => {
            expect(range(3, 10))
                .toEqual([3, 4, 5, 6, 7, 8, 9]);
        });

        it("descending", () => {
            expect(range(10, 3))
                .toEqual([10, 9, 8, 7, 6, 5, 4]);
        });
    });

    describe("start negative", () => {
        describe("ascending", () => {
            it("to zero", () => {
                expect(range(-5, 0))
                    .toEqual([-5, -4, -3, -2, -1]);
            });

            it("non zero", () => {
                expect(range(-11, -7))
                    .toEqual([-11, -10, -9, -8]);
            });
        });

        it("descending", () => {
            expect(range(-3, -7))
                .toEqual([-3, -4, -5, -6]);
        });
    });
});
