// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_011.phpt
  it("ZE2 Late Static Binding call to static::method() from internal function (array)", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    static function ok() {\n        echo \"bug\";\n    }\n    static function test() {\n        call_user_func(array(\"static\",\"ok\"));\n    }\n}\nclass Test2 extends Test1 {\n    static function ok() {\n        echo \"ok\";\n    }\n}\nTest2::test();\n?>")).toMatchSnapshot();
  });
});
