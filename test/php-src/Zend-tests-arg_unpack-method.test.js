// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/method.phpt
  it("Unpack arguments for method calls", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function test(...$args) {\n        var_dump($args);\n    }\n    public static function test2(...$args) {\n        var_dump($args);\n    }\n}\n$foo = new Foo;\nFoo::test2(1, 2, ...[3, 4], ...[], ...[5]);\n?>")).toMatchSnapshot();
  });
});
