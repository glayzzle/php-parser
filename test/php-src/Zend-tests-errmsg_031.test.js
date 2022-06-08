// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_031.phpt
  it("errmsg: cannot use 'parent' as parent class name", function () {
    expect(parser.parseCode("<?php\nclass test extends parent {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
