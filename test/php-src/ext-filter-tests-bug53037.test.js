// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug53037.phpt
  it("Bug #53037 (FILTER_FLAG_EMPTY_STRING_NULL is not implemented)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    filter_var(\"\", FILTER_DEFAULT),\n    filter_var(\"\", FILTER_DEFAULT, array('flags' => FILTER_FLAG_EMPTY_STRING_NULL))\n);\n?>")).toMatchSnapshot();
  });
});
