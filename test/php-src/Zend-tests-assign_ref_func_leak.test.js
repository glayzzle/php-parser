// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_ref_func_leak.phpt
  it("Assigning the result of a non-reference function by-reference should not leak", function () {
    expect(parser.parseCode("<?php\nfunction func() {\n    return [0];\n}\n$x = $y =& func();\nvar_dump($x, $y);\n?>")).toMatchSnapshot();
  });
});
