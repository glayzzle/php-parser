// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_030.phpt
  it("Trying to access undeclared parent property", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    public function __set($a, $b) {\n        print \"hello\\n\";\n    }\n}\nclass foo extends bar {\n    public function __construct() {\n        parent::$f = 1;\n    }\n    public function __set($a, $b) {\n        print \"foo\\n\";\n    }\n}\nnew foo;\n?>")).toMatchSnapshot();
  });
});
