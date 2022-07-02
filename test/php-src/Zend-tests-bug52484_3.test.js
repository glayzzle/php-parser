// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52484_3.phpt
  it("Bug #52484.3 (__set() ignores setting properties with empty names)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __get($prop) {\n        var_dump($this->$prop);\n    }\n}\n$a = new A();\n$prop = \"\\0\";\nvar_dump($a->$prop);\n?>")).toMatchSnapshot();
  });
});
