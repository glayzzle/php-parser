// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69871.phpt
  it("Bug #69871 (Short-circuiting failure with smart_branch)", function () {
    expect(parser.parseCode("<?php\n$a = true;\nif (isset($a) && 0) {\n    var_dump(true);\n} else {\n    var_dump(false);\n}\n?>")).toMatchSnapshot();
  });
});
