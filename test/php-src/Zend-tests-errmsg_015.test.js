// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_015.phpt
  it("errmsg: __clone() cannot accept any arguments", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __clone($var) {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
