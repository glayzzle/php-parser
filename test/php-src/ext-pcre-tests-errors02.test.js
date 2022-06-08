// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/errors02.phpt
  it("Test preg_split() function : error conditions - Malformed UTF-8", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_split('/a/u', \"a\\xff\"));\nvar_dump(preg_last_error_msg() === 'Malformed UTF-8 characters, possibly incorrectly encoded');\n?>")).toMatchSnapshot();
  });
});
