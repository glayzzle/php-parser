// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34358.phpt
  it("Bug #34358 (Fatal error: Cannot re-assign $this(again))", function () {
    expect(parser.parseCode("<?php\nclass foo {\n  function bar() {\n    $ref = &$this;\n  }\n}\n$x = new foo();\n$x->bar();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
