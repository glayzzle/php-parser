// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/explicit_casts_should_not_warn_32bit.phpt
  it("Explicit (int) cast must not warn 32bit variation", function () {
    expect(parser.parseCode("<?php\n$values =[\n    3.0,\n    3.5,\n    10e120,\n    10e300,\n    fdiv(0, 0),\n    (string) 3.0,\n    (string) 3.5,\n    (string) 10e120,\n    (string) 10e300,\n    (string) fdiv(0, 0),\n];\nforeach($values as $value) {\n    var_dump((int) $value);\n}\n?>")).toMatchSnapshot();
  });
});
