// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/type_hinting_003.phpt
  it("ZE2 class type hinting with arrays", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    static function f1(array $ar)\n    {\n        echo __METHOD__ . \"()\\n\";\n        var_dump($ar);\n    }\n    static function f2(array $ar = NULL)\n    {\n        echo __METHOD__ . \"()\\n\";\n        var_dump($ar);\n    }\n    static function f3(array $ar = array())\n    {\n        echo __METHOD__ . \"()\\n\";\n        var_dump($ar);\n    }\n    static function f4(array $ar = array(25))\n    {\n        echo __METHOD__ . \"()\\n\";\n        var_dump($ar);\n    }\n}\nTest::f1(array(42));\nTest::f2(NULL);\nTest::f2();\nTest::f3();\nTest::f4();\nTest::f1(1);\n?>")).toMatchSnapshot();
  });
});
