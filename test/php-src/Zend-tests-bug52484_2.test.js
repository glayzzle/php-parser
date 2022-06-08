// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52484_2.phpt
  it("Bug #52484.2 (__set() ignores setting properties with empty names)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __set($prop, $val) {\n        $this->$prop = $val;\n    }\n}\n$a = new A();\n$prop = \"\\0\";\n$a->$prop = 2;\n?>")).toMatchSnapshot();
  });
});
