// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/rfc002.phpt
  it("RFC example: Scalar Types", function () {
    expect(parser.parseCode("<?php\nfunction answer(): int {\n    return 42;\n}\nvar_dump(answer());\n?>")).toMatchSnapshot();
  });
});
