// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_038.phpt
  it("errmsg: properties cannot be final", function () {
    expect(parser.parseCode("<?php\nclass test {\n    final $var = 1;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
