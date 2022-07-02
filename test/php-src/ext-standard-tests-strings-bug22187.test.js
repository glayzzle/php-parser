// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug22187.phpt
  it("Bug #22187 (possible crash in number_format() function)", function () {
    expect(parser.parseCode("<?php\n    var_dump(number_format(0.0001, 1));\n    var_dump(number_format(0.0001, 0));\n?>")).toMatchSnapshot();
  });
});
