// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61970_2.phpt
  it("Bug #61970 (Restraining __construct() access level in subclass gives a fatal error - stays when inheriting implemented abstract)", function () {
    expect(parser.parseCode("<?php\nabstract class Foo {\n    abstract public function __construct();\n}\nclass Bar extends Foo {\n    public function __construct(){}\n}\nclass Baz extends Bar {\n    protected function __construct(){}\n}\n?>")).toMatchSnapshot();
  });
});
