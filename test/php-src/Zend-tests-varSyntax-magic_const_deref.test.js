// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/magic_const_deref.phpt
  it("Dereferencing of magic constants", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump(__FUNCTION__[0]);\n    var_dump(__FUNCTION__->prop);\n    try {\n        __FUNCTION__->method();\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
