// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_dim_op_undef.phpt
  it("Compound array assign with undefined variables", function () {
    expect(parser.parseCode("<?php\n$a[$b] += 1;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
