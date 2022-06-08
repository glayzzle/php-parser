// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/errors03.phpt
  it("Test preg_match() function : error conditions - Internal error", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/', 'Hello world'));\nvar_dump(preg_last_error_msg() === 'Internal error');\n?>")).toMatchSnapshot();
  });
});
