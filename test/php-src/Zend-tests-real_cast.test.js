// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/real_cast.phpt
  it("The (real) cast is no longer supported", function () {
    expect(parser.parseCode("<?php\nvar_dump((real) 42);\n?>")).toMatchSnapshot();
  });
});
