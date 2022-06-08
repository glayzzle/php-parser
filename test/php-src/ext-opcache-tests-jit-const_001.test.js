// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/const_001.phpt
  it("JIT CONST: defined", function () {
    expect(parser.parseCode("<?php\nfunction define_const() {\n    define(\"CUSTOM_CONSTANT\", 1);\n}\nfunction test_defined() {\n    var_dump(defined(\"CUSTOM_CONSTANT\"));\n    define_const();\n    var_dump(defined(\"CUSTOM_CONSTANT\"));\n}\ntest_defined();\n?>")).toMatchSnapshot();
  });
});
