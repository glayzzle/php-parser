// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69832.phpt
  it("Bug #69832 (Assertion failed in zend_compile_const_expr_magic_const)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $foo = [Bar::A, __CLASS__][__CLASS__ != \"\"];\n    public $bar = Bar::A && __CLASS__;\n    public $baz = Bar::A ?: __CLASS__;\n    public $buzz = Bar::A ? __CLASS__ : 0;\n}\neval(<<<'PHP'\nclass Bar {\n    const A = 1;\n}\nPHP\n);\n$t = new Test;\nvar_dump($t->foo);\nvar_dump($t->bar);\nvar_dump($t->baz);\nvar_dump($t->buzz);\n?>")).toMatchSnapshot();
  });
});
