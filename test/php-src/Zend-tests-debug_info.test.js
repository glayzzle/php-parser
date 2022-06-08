// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/debug_info.phpt
  it("Testing __debugInfo() magic method", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  public $d = 4;\n  protected $e = 5;\n  private $f = 6;\n  public function __debugInfo() {\n    return ['a'=>1, \"\\0*\\0b\"=>2, \"\\0Foo\\0c\"=>3];\n  }\n}\nclass Bar {\n  public $val = 123;\n  public function __debugInfo() {\n    return null;\n  }\n}\n$f = new Foo;\nvar_dump($f);\n$b = new Bar;\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
