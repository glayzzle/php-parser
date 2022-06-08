// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_017.phpt
  it("errmsg: __unset() must take exactly 1 argument", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __unset() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
