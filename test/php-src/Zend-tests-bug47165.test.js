// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47165.phpt
  it("Bug #47165 (Possible memory corruption when passing return value by reference)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    var $bar = array();\n    static function bar() {\n        static $instance = null;\n        $instance = new Foo();\n        return $instance->bar;\n    }\n}\nextract(Foo::bar());\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
