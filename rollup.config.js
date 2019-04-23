export default {
    input: "src/range.js",
    output: [
        {
            file: "index.js",
            format: "cjs"
        },
        {
            file: "esm/index.js",
            format: "esm"
        },
        {
            file: "standalone/range.js",
            format: "iife",
            name: "range"
        }
    ]
};
