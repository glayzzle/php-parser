// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug37964.phpt
  it("Reflection Bug #37964 (Reflection shows private methods of parent class)", function () {
    expect(parser.parseCode("<?php\nabstract class foobar {\n    private function test2() {\n    }\n}\nclass foo extends foobar {\n    private $foo = 1;\n    private function test() {\n    }\n    protected function test3() {\n    }\n}\nclass bar extends foo {\n    private function foobar() {\n    }\n}\necho new ReflectionClass(new bar);\n?>")).toMatchSnapshot();
  });
});
