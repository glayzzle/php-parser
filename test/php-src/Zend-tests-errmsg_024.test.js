// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_024.phpt
  it("No more errmsg: can now change initial value of property", function () {
    expect(parser.parseCode("<?php\nclass test1 {\n    static protected $var = 1;\n}\nclass test extends test1 {\n    static $var = 10;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
