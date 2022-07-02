// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/code_before_loop_var_free.phpt
  it("Code before loop var free", function () {
    expect(parser.parseCode("<?php\nswitch ($x > 0) {\ndefault:\n    return;\n    Y;\n}\n?>")).toMatchSnapshot();
  });
});
