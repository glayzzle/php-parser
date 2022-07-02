// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70241.phpt
  it("Bug #70241 (Skipped assertions affect Generator returns)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    assert(yield 1);\n    return null;\n}\nvar_dump(foo() instanceof Generator);\n?>")).toMatchSnapshot();
  });
});
