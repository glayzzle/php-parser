// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_019.phpt
  it("errmsg: __destruct() cannot take arguments", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __destruct($var) {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
