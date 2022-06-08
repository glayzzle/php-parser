// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_018.phpt
  it("errmsg: static abstract function", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static abstract function foo ();\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
