// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/flattening001.phpt
  it("Methods using object properties", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait T1 {\n  public function getText() {\n    return $this->text;\n  }\n}\ntrait T2 {\n  public function setTextT2($val) {\n    $this->text = $val;\n  }\n}\nclass TraitsTest {\n  use T1;\n  use T2;\n  private $text = 'test';\n  public function setText($val) {\n    $this->text = $val;\n  }\n}\n$o = new TraitsTest();\nvar_dump($o->getText());\n$o->setText('foo');\nvar_dump($o->getText());\n$o->setText('bar');\nvar_dump($o->getText());\n?>")).toMatchSnapshot();
  });
});
