// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug75089.phpt
  it("Bug #75089 (preg_grep() is not reporting PREG_BAD_UTF8_ERROR after first input string)", function () {
    expect(parser.parseCode("<?php\npreg_grep('#\\d#u', ['a', \"1\\xFF\"/*, 'c'*/]);\nvar_dump(preg_last_error());\n?>")).toMatchSnapshot();
  });
});
