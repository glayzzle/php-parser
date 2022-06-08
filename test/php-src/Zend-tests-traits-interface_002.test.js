// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/interface_002.phpt
  it("Checking error message when the trait doesn't implements the interface", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function a() {\n    }\n}\ninterface baz {\n    public function abc();\n}\nclass bar implements baz {\n    use foo;\n}\nnew bar;\n?>")).toMatchSnapshot();
  });
});
