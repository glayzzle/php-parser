// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug8315.phpt
  it("bug 8315, NULL values halt the validation", function () {
    expect(parser.parseCode("<?php\n$var=\"3\".chr(0).\"foo\";\nvar_dump(filter_var($var, FILTER_VALIDATE_INT));\n$var=\"3\".chr(0).\"foo\";\nvar_dump(filter_var($var, FILTER_VALIDATE_FLOAT));\n?>")).toMatchSnapshot();
  });
});
