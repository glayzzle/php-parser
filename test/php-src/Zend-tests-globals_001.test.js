// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/globals_001.phpt
  it("globals in global scope", function () {
    expect(parser.parseCode("<?php\nvar_dump(isset($_SERVER));\nvar_dump(empty($_SERVER));\nvar_dump(gettype($_SERVER));\nvar_dump(count($_SERVER));\nvar_dump($_SERVER['PHP_SELF']);\nunset($_SERVER['PHP_SELF']);\nvar_dump($_SERVER['PHP_SELF']);\nunset($_SERVER);\nvar_dump($_SERVER);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
