// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_037.phpt
  it("errmsg: properties cannot be abstract", function () {
    expect(parser.parseCode("<?php\nclass test {\n    abstract $var = 1;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
