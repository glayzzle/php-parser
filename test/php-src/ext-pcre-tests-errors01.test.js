// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/errors01.phpt
  it("Test preg_split() function : error conditions - Recursion limit exhausted", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_last_error_msg() === 'No error');\npreg_split('/(\\d*)/', 'ab2c3u');\nvar_dump(preg_last_error_msg() === 'Recursion limit exhausted');\n?>")).toMatchSnapshot();
  });
});
