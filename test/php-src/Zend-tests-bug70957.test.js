// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70957.phpt
  it("Bug #70957 (self::class can not be resolved with reflection for abstract class)", function () {
    expect(parser.parseCode("<?php\nabstract class Foo\n{\n    function bar($a = self::class) {}\n}\ntrait T {\n    public function bar() {\n    }\n}\nclass B extends Foo\n{\n    use T;\n}\n?>")).toMatchSnapshot();
  });
});
