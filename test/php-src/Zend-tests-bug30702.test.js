// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30702.phpt
  it("Bug #30702 (cannot initialize class variable from class constant)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    const C1=1;\n}\nclass bar extends foo {\n  const C2=2;\n  public $c1=bar::C1;\n  public $c2=bar::C2;\n  public $c3=self::C1;\n  public $c4=self::C2;\n  public $c5=foo::C1;\n  public $c6=parent::C1;\n}\n$x= new bar();\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
