// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_029.phpt
  it("errmsg: cannot use 'parent' as class name", function () {
    expect(parser.parseCode("<?php\nclass parent {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
