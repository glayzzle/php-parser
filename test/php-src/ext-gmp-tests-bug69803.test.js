// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug69803.phpt
  it("Bug #69803: gmp_random_range() modifies second parameter if GMP number", function () {
    expect(parser.parseCode("<?php\n$a = gmp_init(100);\n$b = gmp_init(200);\necho $a . \", \", $b . \"\\n\";\ngmp_random_range($a, $b);\necho $a . \", \", $b . \"\\n\";\n$b = gmp_init(200);\necho $a . \", \", $b . \"\\n\";\ngmp_random_range(100, $b);\necho $a . \", \", $b . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
