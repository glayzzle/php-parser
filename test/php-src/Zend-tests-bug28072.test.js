// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug28072.phpt
  it("Bug #28072 (static array with some constant keys will be incorrectly ordered)", function () {
    expect(parser.parseCode("<?php\ndefine(\"FIRST_KEY\", \"a\");\ndefine(\"THIRD_KEY\", \"c\");\nfunction test()\n{\n        static $arr = array(\n                FIRST_KEY => \"111\",\n                \"b\" => \"222\",\n                THIRD_KEY => \"333\",\n                \"d\" => \"444\"\n        );\n        print_r($arr);\n}\nfunction test2()\n{\n        static $arr = array(\n                FIRST_KEY => \"111\",\n                \"a\" => \"222\",\n                \"c\" => \"333\",\n                THIRD_KEY => \"444\"\n        );\n        print_r($arr);\n}\ntest();\ntest2();\n?>")).toMatchSnapshot();
  });
});
