// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_by_ref_002.phpt
  it("passing second parameter of __set() by ref", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __set($name, &$val) { }\n}\n$t = new test;\n$t->prop = 1;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
