// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41117_1.phpt
  it("Bug #41117 (Altering $this via argument)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n  function __construct($this) {\n    echo $this.\"\\n\";\n  }\n}\n$obj = new foo(\"Hello world\");\n?>")).toMatchSnapshot();
  });
});
