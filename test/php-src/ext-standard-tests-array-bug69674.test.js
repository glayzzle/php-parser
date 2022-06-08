// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69674.phpt
  it("Bug #69674 (SIGSEGV array.c:953)", function () {
    expect(parser.parseCode("<?php\nvar_dump(current(array_keys(array())));\n?>")).toMatchSnapshot();
  });
});
