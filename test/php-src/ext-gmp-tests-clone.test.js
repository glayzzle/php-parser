// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/clone.phpt
  it("Cloning GMP instances", function () {
    expect(parser.parseCode("<?php\n$a = gmp_init(3);\n$b = clone $a;\ngmp_clrbit($a, 0);\nvar_dump($a, $b); // $b should be unaffected\n?>")).toMatchSnapshot();
  });
});
