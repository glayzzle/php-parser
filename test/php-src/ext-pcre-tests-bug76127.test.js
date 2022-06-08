// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug76127.phpt
  it("Bug #76127: preg_split does not raise an error on invalid UTF-8", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_split(\"/a/u\", \"a\\xff\"));\nvar_dump(preg_last_error() == PREG_BAD_UTF8_ERROR);\n?>")).toMatchSnapshot();
  });
});
