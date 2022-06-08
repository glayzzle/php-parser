// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_030.phpt
  it("errmsg: cannot use 'self' as parent class name", function () {
    expect(parser.parseCode("<?php\nclass test extends self {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
