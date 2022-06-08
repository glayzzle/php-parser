// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug47745.phpt
  it("Bug #47745 (FILTER_VALIDATE_INT doesn't allow minimum integer)", function () {
    expect(parser.parseCode("<?php\n$s = (string)(-PHP_INT_MAX-1);\nvar_dump(intval($s));\nvar_dump(filter_var($s, FILTER_VALIDATE_INT));\n?>")).toMatchSnapshot();
  });
});
