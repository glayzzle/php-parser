// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_028.phpt
  it("SCCP 028: Don't propagate typed properties", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = 1;\n}\nfunction test() {\n    $foo = new Foo();\n    $foo->bar = \"10\";\n    var_dump($foo->bar);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
