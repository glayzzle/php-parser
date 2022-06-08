// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/globals_002.phpt
  it("globals in local scope", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump(isset($_SERVER));\n    var_dump(empty($_SERVER));\n    var_dump(gettype($_SERVER));\n    var_dump(count($_SERVER));\n    var_dump($_SERVER['PHP_SELF']);\n    unset($_SERVER['PHP_SELF']);\n    var_dump($_SERVER['PHP_SELF']);\n    unset($_SERVER);\n    var_dump($_SERVER);\n}\ntest();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
