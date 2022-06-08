// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug23581.phpt
  it("Bug #23581 (array_map(NULL, array, array, ...) yields an undefined result)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n  array_map(\n    NULL,\n    array(1,2,3),\n    array(4,5,6),\n    array(7,8,9)\n  )\n);\n?>")).toMatchSnapshot();
  });
});
