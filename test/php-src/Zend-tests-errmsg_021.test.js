// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_021.phpt
  it("errmsg: disabled class", function () {
    expect(parser.parseCode("<?php\nclass test extends stdclass {\n}\n$t = new test;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
