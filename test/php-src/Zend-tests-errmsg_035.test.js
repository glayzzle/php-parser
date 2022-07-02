// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_035.phpt
  it("errmsg: cannot use 'self' as interface name", function () {
    expect(parser.parseCode("<?php\nclass test implements self {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
