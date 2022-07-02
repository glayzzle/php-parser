// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/number_format_with_3_args.phpt
  it("number_format should use default thousands seperator when 3 arguments are used", function () {
    expect(parser.parseCode("<?php\n$number = 2020.1415;\nvar_dump(number_format($number, 2, 'F'));\n?>")).toMatchSnapshot();
  });
});
