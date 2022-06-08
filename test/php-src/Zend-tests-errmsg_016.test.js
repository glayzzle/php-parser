// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_016.phpt
  it("errmsg: __isset() must take exactly 1 argument", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __isset() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
