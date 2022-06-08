// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_011.phpt
  it("errmsg: cannot redeclare (method)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function foo() {}\n    function foo() {}\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
