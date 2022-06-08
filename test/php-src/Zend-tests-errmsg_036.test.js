// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_036.phpt
  it("errmsg: cannot use 'parent' as interface name", function () {
    expect(parser.parseCode("<?php\nclass test implements parent {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
