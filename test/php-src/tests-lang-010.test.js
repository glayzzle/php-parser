// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/010.phpt
  it("Testing function parameter passing with a return value", function () {
    expect(parser.parseCode("<?php\nfunction test ($b) {\n    $b++;\n    return($b);\n}\n$a = test(1);\necho $a;\n?>")).toMatchSnapshot();
  });
});
