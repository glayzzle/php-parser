// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39449.phpt
  it("Bug #39449 (Overloaded array properties do not work correctly)", function () {
    expect(parser.parseCode("<?php\nclass A {\n  private $keys = array();\n  public function & __get($val) {\n    return $this->keys[$val];\n  }\n  public function __set($k, $v) {\n    $this->keys[$k] = $v;\n  }\n}\n$a =new A();\n$a->arr = array('a','b','c');\n$b = &$a->arr;\n$b[]= 'd';\nforeach ($a->arr as $k => $v) {\n  echo \"$k => $v\\n\";\n}\n$a->arr[]='d';\nforeach ($a->arr as $k => $v) {\n  echo \"$k => $v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
