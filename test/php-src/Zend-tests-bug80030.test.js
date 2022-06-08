// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80030.phpt
  it("Bug #80030: Optimizer segfault with isset on static property with undef dynamic class name", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump(isset($className::$test));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
