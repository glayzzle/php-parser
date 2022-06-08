// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/007.phpt
  it("Return value is subclass of return type", function () {
    expect(parser.parseCode("<?php\nclass foo {}\nclass qux extends foo {\n    public function foo() : foo {\n        return $this;\n    }\n}\n$qux = new qux();\nvar_dump($qux->foo());\n?>")).toMatchSnapshot();
  });
});
