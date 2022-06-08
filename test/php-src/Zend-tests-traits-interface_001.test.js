// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/interface_001.phpt
  it("Using traits to implement interface", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function abc() {\n    }\n}\ninterface baz {\n    public function abc();\n}\nclass bar implements baz {\n    use foo;\n}\nnew bar;\nprint \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
