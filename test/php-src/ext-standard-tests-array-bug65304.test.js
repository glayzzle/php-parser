// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug65304.phpt
  it("Bug #65304 (Use of max int in array_sum)", function () {
    expect(parser.parseCode("<?php\nvar_dump(array_sum(array(PHP_INT_MAX, 1)));\nvar_dump(PHP_INT_MAX + 1);\n?>")).toMatchSnapshot();
  });
});
