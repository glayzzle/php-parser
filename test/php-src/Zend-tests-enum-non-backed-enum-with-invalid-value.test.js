// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/non-backed-enum-with-invalid-value.phpt
  it("Non-backed enum errors when case has invalid value", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar = 3.141;\n}\n?>")).toMatchSnapshot();
  });
});
