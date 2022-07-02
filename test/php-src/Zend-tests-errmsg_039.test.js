// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_039.phpt
  it("errmsg: cannot redeclare property", function () {
    expect(parser.parseCode("<?php\nclass test {\n    var $var;\n    var $var;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
