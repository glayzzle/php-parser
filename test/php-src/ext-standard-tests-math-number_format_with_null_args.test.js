// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/number_format_with_null_args.phpt
  it("number_format should use default values when passed null", function () {
    expect(parser.parseCode("<?php\n$number = 2020.1415;\nvar_dump(number_format($number, 2, null, 'T'));\nvar_dump(number_format($number, 2, 'F', null));\n?>")).toMatchSnapshot();
  });
});
