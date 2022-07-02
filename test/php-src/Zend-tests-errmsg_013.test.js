// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_013.phpt
  it("errmsg: default value for parameters with array type can only be an array or null", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function foo(array $a = \"s\") {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
