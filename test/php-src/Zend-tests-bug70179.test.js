// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70179.phpt
  it("Bug #70179 ($this refcount issue)", function () {
    expect(parser.parseCode("<?php\nclass X {\n    function __invoke() {\n        var_dump($this);\n    }\n}\n(new X)();\n?>")).toMatchSnapshot();
  });
});
