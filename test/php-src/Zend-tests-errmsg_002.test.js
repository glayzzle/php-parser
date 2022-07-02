// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_002.phpt
  it("errmsg: function cannot be declared private", function () {
    expect(parser.parseCode("<?php\nabstract class test {\n    abstract private function foo() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
