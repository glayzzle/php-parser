// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/non-backed-enum-with-string-value.phpt
  it("Non-backed enum errors when case has string value", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar = 'Bar';\n}\n?>")).toMatchSnapshot();
  });
});
