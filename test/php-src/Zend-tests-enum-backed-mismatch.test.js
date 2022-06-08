// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-mismatch.phpt
  it("Mismatched enum backing type", function () {
    expect(parser.parseCode("<?php\nenum Foo: int {\n    case Bar = 'bar';\n}\n?>")).toMatchSnapshot();
  });
});
