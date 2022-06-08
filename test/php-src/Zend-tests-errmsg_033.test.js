// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_033.phpt
  it("errmsg: __destruct() cannot be static", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static function __destruct() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
