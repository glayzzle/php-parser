// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70967.phpt
  it("Bug #70967 (Weird error handling for __toString when Error is thrown)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __toString() {\n        undefined_function();\n    }\n}\necho (new A);\n?>")).toMatchSnapshot();
  });
});
