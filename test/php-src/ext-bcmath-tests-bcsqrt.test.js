// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcsqrt.phpt
  it("bcsqrt() function", function () {
    expect(parser.parseCode("<?php\necho bcsqrt(\"9\"),\"\\n\";\necho bcsqrt(\"9.444\", 2),\"\\n\";\necho bcsqrt(\"1928372132132819737213\", 5),\"\\n\";\necho bcsqrt(\"0.5\", 5), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
