// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60833.phpt
  it("Bug #60833 (self, parent, static behave inconsistently case-sensitive)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static $x = \"A\";\n    function testit() {\n        $this->v1 = new sELF;\n        $this->v2 = new SELF;\n    }\n}\nclass B extends A {\n    static $x = \"B\";\n    function testit() {\n        PARENT::testit();\n        $this->v3 = new sELF;\n        $this->v4 = new PARENT;\n        $this->v4 = STATIC::$x;\n    }\n}\n$t = new B();\n$t->testit();\nvar_dump($t);\n?>")).toMatchSnapshot();
  });
});
