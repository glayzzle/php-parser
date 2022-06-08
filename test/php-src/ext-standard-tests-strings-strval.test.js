// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strval.phpt
  it("strval() function", function () {
    expect(parser.parseCode("<?php\n$foo = 'bar';\nvar_dump(strval($foo));\ndefine('FOO', 'BAR');\nvar_dump(strval(FOO));\nvar_dump(strval('foobar'));\nvar_dump(strval(1));\nvar_dump(strval(1.1));\nvar_dump(strval(true));\nvar_dump(strval(false));\nvar_dump(strval(array('foo')));\n?>")).toMatchSnapshot();
  });
});
