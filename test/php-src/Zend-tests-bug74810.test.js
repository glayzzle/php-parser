// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74810.phpt
  it("Bug #74810: Something odd about ordering of func_get_args() result in 7.2", function () {
    expect(parser.parseCode("<?php\nfunction test_slice1() {\n    var_dump(array_slice(func_get_args(), 1));\n}\nfunction test_slice5() {\n    var_dump(array_slice(func_get_args(), 5));\n}\ntest_slice1(1, 2, 3);\ntest_slice5(1, 2, 3);\n?>")).toMatchSnapshot();
  });
});
