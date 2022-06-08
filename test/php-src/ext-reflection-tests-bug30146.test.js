// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug30146.phpt
  it("Reflection Bug #30146 (ReflectionProperty->getValue() requires instance for static property)", function () {
    expect(parser.parseCode("<?php\nclass test {\n  static public $a = 1;\n}\n$r = new ReflectionProperty('test', 'a');\nvar_dump($r->getValue(null));\n$r->setValue(NULL, 2);\nvar_dump($r->getValue());\n$r->setValue(3);\nvar_dump($r->getValue());\n?>")).toMatchSnapshot();
  });
});
