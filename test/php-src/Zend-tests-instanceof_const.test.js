// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/instanceof_const.phpt
  it("Instanceof on literals returns false", function () {
    expect(parser.parseCode("<?php\nvar_dump(\"abc\" instanceof stdclass);\n?>")).toMatchSnapshot();
  });
});
