// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug52732.phpt
  it("Bug #52732 (Docs say preg_match() returns FALSE on error, but it returns int(0))", function () {
    expect(parser.parseCode("<?php\n$ret = preg_match('/(?:\\D+|<\\d+>)*[!?]/', 'foobar foobar foobar');\nvar_dump($ret);\n?>")).toMatchSnapshot();
  });
});
