// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60145.phpt
  it("Bug #60145 (Usage of trait's use statement inside interfaces not properly checked.)", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n}\ninterface MyInterface {\n    use foo;\n    public function b();\n}\n?>")).toMatchSnapshot();
  });
});
