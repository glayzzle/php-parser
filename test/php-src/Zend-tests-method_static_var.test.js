// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/method_static_var.phpt
  it("Initial value of static var in method depends on the include time of the class definition", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function test() {\n        static $i = 0;\n        var_dump(++$i);\n    }\n}\nFoo::test();\neval(\"class Bar extends Foo {}\");\nFoo::test();\nBar::test();\nBar::test();\n?>")).toMatchSnapshot();
  });
});
