// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/errors06.phpt
  it("Test preg_match() function : error conditions - Malformed UTF-8 offset", function () {
    expect(parser.parseCode("<?php\npreg_match('/a/u', \"\\xE3\\x82\\xA2\", $m, 0, 1);\nvar_dump(preg_last_error() === PREG_BAD_UTF8_OFFSET_ERROR);\nvar_dump(preg_last_error_msg() === 'The offset did not correspond to the beginning of a valid UTF-8 code point');\n?>")).toMatchSnapshot();
  });
});
