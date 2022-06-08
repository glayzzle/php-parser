// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug70982.phpt
  it("Bug #70982 (setStaticPropertyValue behaviors inconsistently with 5.6)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    static $abc;\n    function __construct()\n    {\n        var_dump(self::$abc);\n    }\n}\nclass Bar extends Foo {\n}\n$rf = new ReflectionClass('Bar');\n$rf->setStaticPropertyValue('abc', 'hi');\n$foo = $rf->newInstance();\n?>")).toMatchSnapshot();
  });
});
