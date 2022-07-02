// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_028.phpt
  it("errmsg: cannot use 'self' as class name", function () {
    expect(parser.parseCode("<?php\nclass self {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
