// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/comparison.phpt
  it("Overloaded GMP comparison in sort() etc", function () {
    expect(parser.parseCode("<?php\n$arr = [gmp_init(0), -3, gmp_init(2), 1];\nsort($arr);\nvar_dump($arr);\nvar_dump(min(gmp_init(3), 4));\nvar_dump(max(gmp_init(3), 4));\n?>")).toMatchSnapshot();
  });
});
