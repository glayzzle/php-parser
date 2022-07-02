// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/009.phpt
  it("Testing function parameter passing", function () {
    expect(parser.parseCode("<?php\nfunction test ($a,$b) {\n    echo $a+$b;\n}\ntest(1,2);\n?>")).toMatchSnapshot();
  });
});
