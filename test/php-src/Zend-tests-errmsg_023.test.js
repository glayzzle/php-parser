// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_023.phpt
  it("errmsg: access level must be the same or weaker", function () {
    expect(parser.parseCode("<?php\nclass test1 {\n    protected $var;\n}\nclass test extends test1 {\n    private $var;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
