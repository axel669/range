const range = require("../index.js");

describe("Simple ranges", () => {
    describe("from 0", () => {
        it("to positive", () => {
            const singleArg = {
                target: [0, 1, 2, 3, 4],
                generated: range(5)
            };
            const singleArg = {
                target: [0, 1, 2, 3, 4],
                generated: range(0, 5)
            };

            expect(singleArg.generated)
                .toEqual(singleArg.target);
            expect(twoArg.generated)
                .toEqual(twoArg.target);
        });

        it("to negative", () => {
            const twoArg = {
                const target = [0, -1, -2, -3, -4];
                const generated = range(0, -5);

            expect(generated)
                .toEqual(target);
        });

        it("descending", () => {
            const
        });
    });

    it("start positive", () => {
    });
});
