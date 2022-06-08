// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/argument_restriction_004.phpt
  it("Bug #55719 (Argument restriction should come with a more specific error message)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n}\nAbstract Class Base {\n    abstract public function test(Foo $foo, array $bar, $option = NULL, $extra = 16777215) ;\n}\nclass Sub extends Base {\n    public function test(Foo $foo, array $bar, $option = NULL, $extra = 0xffffff ) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
