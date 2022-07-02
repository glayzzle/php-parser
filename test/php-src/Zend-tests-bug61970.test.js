// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61970.phpt
  it("Bug #61970 (Restraining __construct() access level in subclass gives a fatal error)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __construct(){}\n}\nclass Bar extends Foo {\n    protected function __construct(){}\n}\necho 'DONE';\n?>")).toMatchSnapshot();
  });
});
