// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/globals_003.phpt
  it("globals in local scope - 2", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static function bar() {\n        var_dump(isset($_SERVER));\n        var_dump(empty($_SERVER));\n        var_dump(gettype($_SERVER));\n        var_dump(count($_SERVER));\n        var_dump($_SERVER['PHP_SELF']);\n        unset($_SERVER['PHP_SELF']);\n        var_dump($_SERVER['PHP_SELF']);\n        unset($_SERVER);\n        var_dump($_SERVER);\n    }\n}\ntest::bar();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
