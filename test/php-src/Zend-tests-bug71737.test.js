// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71737.phpt
  it("Bug #71737: Memory leak in closure with parameter named $this", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {\n        return function($this) {};\n    }\n}\n(new Test)->method()(new stdClass);\n?>")).toMatchSnapshot();
  });
});
