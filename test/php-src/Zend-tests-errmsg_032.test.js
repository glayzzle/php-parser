// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_032.phpt
  it("errmsg: __construct() cannot be static", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static function __construct() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
