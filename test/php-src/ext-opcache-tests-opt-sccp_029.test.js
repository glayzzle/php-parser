// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_029.phpt
  it("SCCP 029: Don't propagate assignments to references to typed properties", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public string $x = \"x\";\n}\nfunction test() {\n    $test = new Test();\n    $ref = \"y\";\n    $test->x =& $ref;\n    $ref = 42;\n    var_dump($ref);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
