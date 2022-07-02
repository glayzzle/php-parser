// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug23894_32bit.phpt
  it("Bug #23894 (sprintf() decimal specifiers problem) 32bit version", function () {
    expect(parser.parseCode("<?php\n$a = -12.3456;\n$test = sprintf(\"%04d\", $a);\nvar_dump($test, bin2hex($test));\n$test = sprintf(\"% 13u\", $a);\nvar_dump($test, bin2hex($test));\n?>")).toMatchSnapshot();
  });
});
