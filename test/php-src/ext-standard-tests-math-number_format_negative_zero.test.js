// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/number_format_negative_zero.phpt
  it("Prevent number_format from returning negative zero", function () {
    expect(parser.parseCode("<?php\n$number = -1.15E-15;\nvar_dump($number);\nvar_dump(number_format($number, 2));\nvar_dump(number_format(-0.01, 2));\n?>")).toMatchSnapshot();
  });
});
