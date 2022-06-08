// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_by_ref_003.phpt
  it("passing parameter of __get() by ref", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __get(&$name) { }\n}\n$t = new test;\n$name = \"prop\";\nvar_dump($t->$name);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
