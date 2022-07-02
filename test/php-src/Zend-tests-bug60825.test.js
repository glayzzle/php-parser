// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60825.phpt
  it("Bug #60825 (Segfault when running symfony 2 tests) (PHP7)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    public static $x;\n    public function __toString() {\n        self::$x = $this;\n        return __FILE__;\n    }\n}\n$a = new test;\nrequire_once $a;\ndebug_zval_dump($a, test::$x);\n?>")).toMatchSnapshot();
  });
});
