// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_009.phpt
  it("errmsg: multiple access type modifiers are not allowed (properties)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    public private $var;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
