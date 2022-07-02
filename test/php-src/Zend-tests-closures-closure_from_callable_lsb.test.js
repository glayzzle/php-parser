// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/closure_from_callable_lsb.phpt
  it("Testing Closure::fromCallable() functionality: Late static binding", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function test() {\n        var_dump(static::class);\n    }\n}\nclass B extends A {\n}\nClosure::fromCallable(['A', 'test'])();\nClosure::fromCallable(['B', 'test'])();\n?>")).toMatchSnapshot();
  });
});
