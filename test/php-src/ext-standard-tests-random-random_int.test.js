// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/random/random_int.phpt
  it("Test normal operation of random_int()", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_int(random_int(10, 100)));\n$x = random_int(10, 100);\nvar_dump($x >= 10 && $x <= 100);\nvar_dump(random_int(-1000, -1) < 0);\nvar_dump(random_int(-1, PHP_INT_MAX) >= -1);\nvar_dump(is_int(random_int(PHP_INT_MIN, PHP_INT_MAX)));\nvar_dump(random_int(42,42));\n?>")).toMatchSnapshot();
  });
});
