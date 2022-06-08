// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/operator_identical_recusion-01.phpt
  it("Test === operator : False recursion detection", function () {
    expect(parser.parseCode("<?php\n$n = 0;\n$a = [[$n]];\n$b = [&$a];\nvar_dump($a === $b);\n?>")).toMatchSnapshot();
  });
});
