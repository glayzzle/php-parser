// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_exists_basic.phpt
  it("function_exists function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in Zend/zend_builtin_functions.c\n*/\necho \"*** Testing function_exists() : basic functionality ***\\n\";\necho \"Internal function: \";\nvar_dump(function_exists('function_exists'));\necho \"User defined function: \";\nfunction f() {}\nvar_dump(function_exists('f'));\necho \"Case sensitivity: \";\nvar_dump(function_exists('F'));\necho \"Non existent function: \";\nvar_dump(function_exists('g'));\necho \"Method: \";\nClass C {\n    static function f() {}\n}\nvar_dump(function_exists('C::f'));\n?>")).toMatchSnapshot();
  });
});
