// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_by_ref_005.phpt
  it("passing parameter of __isset() by ref", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __isset(&$name) { }\n}\n$t = new test;\n$name = \"prop\";\nvar_dump(isset($t->$name));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
