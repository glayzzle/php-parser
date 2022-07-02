// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_by_ref_006.phpt
  it("passing first parameter of __call() by ref", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __call(&$name, $args) { }\n}\n$t = new test;\n$func = \"foo\";\n$t->$func();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
