// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_034.phpt
  it("errmsg: __clone() cannot be static", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static function __clone() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
