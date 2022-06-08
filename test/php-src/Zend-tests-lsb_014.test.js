// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_014.phpt
  it("ZE2 Late Static Binding access to static::const through defined() and get_constant()", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    static function test() {\n        var_dump(defined(\"static::ok\"));\n        if (defined(\"static::ok\")) {\n            echo constant(\"static::ok\");\n        }\n    }\n}\nclass Test2 extends Test1 {\n    const ok = \"ok\";\n}\nTest1::test();\nTest2::test();\n?>")).toMatchSnapshot();
  });
});
