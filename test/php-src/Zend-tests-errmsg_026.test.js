// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_026.phpt
  it("errmsg: cannot redeclare class", function () {
    expect(parser.parseCode("<?php\nclass stdclass {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
