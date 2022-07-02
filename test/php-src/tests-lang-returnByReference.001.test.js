// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/returnByReference.001.phpt
  it("Returning a reference from a function", function () {
    expect(parser.parseCode("<?php\nfunction &returnByRef(&$arg1)\n{\n    return $arg1;\n}\n$a = 7;\n$b =& returnByRef($a);\nvar_dump($b);\n$a++;\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
