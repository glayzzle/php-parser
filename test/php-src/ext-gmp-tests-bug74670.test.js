// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug74670.phpt
  it("Bug #74670: Integer Underflow when unserializing GMP and possible other classes", function () {
    expect(parser.parseCode("<?php\n$str = 'C:3:\"GMP\":4:{s:6666666666:\"\"}';\nvar_dump(unserialize($str));\n?>")).toMatchSnapshot();
  });
});
