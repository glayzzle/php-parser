// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_010.phpt
  it("errmsg: multiple access type modifiers are not allowed (methods)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    private protected function foo() {}\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
