// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61970_1.phpt
  it("Bug #61970 (Restraining __construct() access level in subclass gives a fatal error - stays when implementing abstract)", function () {
    expect(parser.parseCode("<?php\nabstract class Foo {\n    abstract public function __construct();\n}\nclass Bar extends Foo {\n    protected function __construct(){}\n}\n?>")).toMatchSnapshot();
  });
});
