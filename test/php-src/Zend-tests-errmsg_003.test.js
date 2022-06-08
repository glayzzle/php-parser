// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_003.phpt
  it("errmsg: cannot reassign $this (by ref)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function foo() {\n        $a = new test;\n        $this = &$a;\n    }\n}\n$t = new test;\n$t->foo();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
