// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52484.phpt
  it("Bug #52484 (__set() ignores setting properties with empty names)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __unset($prop) {\n        unset($this->$prop);\n    }\n}\n$a = new A();\n$prop = \"\\0\";\nunset($a->$prop);\n?>")).toMatchSnapshot();
  });
});
