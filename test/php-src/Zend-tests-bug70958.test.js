// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70958.phpt
  it("Bug #70958 (Invalid opcode while using ::class as trait method parameter default value)", function () {
    expect(parser.parseCode("<?php\ntrait Foo\n{\n    function bar($a = self::class) {\n        var_dump($a);\n    }\n}\nclass B {\n    use Foo;\n}\n$b = new B;\n$b->bar();\n?>")).toMatchSnapshot();
  });
});
