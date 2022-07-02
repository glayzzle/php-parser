// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_dim_ref_free.phpt
  it("Assigning rc=1 reference to next dim", function () {
    expect(parser.parseCode("<?php\nvar_dump($ary[] = [&$x] = $x);\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
