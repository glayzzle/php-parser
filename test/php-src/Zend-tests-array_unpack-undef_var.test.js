// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/undef_var.phpt
  it("array unpacking with undefined variable", function () {
    expect(parser.parseCode("<?php\nvar_dump([...$arr]);\n?>")).toMatchSnapshot();
  });
});
