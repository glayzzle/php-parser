// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39018_2.phpt
  it("Bug #39018 [2] (Error control operator '@' fails to suppress \"Uninitialized string offset\")", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$foo = 'test';\n$x = @$foo[6];\nvar_dump(@($foo[100] . $foo[130]));\n?>")).toMatchSnapshot();
  });
});
