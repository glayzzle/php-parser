// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_013.phpt
  it("ZE2 Late Static Binding is_callable() and static::method()", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    static function test() {\n        var_dump(is_callable(\"static::ok\"));\n        var_dump(is_callable(array(\"static\",\"ok\")));\n    }\n}\nclass Test2 extends Test1 {\n    static function ok() {\n    }\n}\nTest1::test();\nTest2::test();\n?>")).toMatchSnapshot();
  });
});
