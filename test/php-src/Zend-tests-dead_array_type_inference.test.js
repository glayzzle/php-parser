// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dead_array_type_inference.phpt
  it("Make sure type inference upholds invariants for dead arrays", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    foreach ($a as $v) {\n        $b[] = $v;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
