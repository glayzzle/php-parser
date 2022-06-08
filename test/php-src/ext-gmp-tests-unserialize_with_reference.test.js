// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/unserialize_with_reference.phpt
  it("Unserialize GMP instance with internal reference to itself", function () {
    expect(parser.parseCode("<?php\n$s = 'C:3:\"GMP\":23:{s:1:\"2\";a:1:{i:46;R:1;}}';\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
