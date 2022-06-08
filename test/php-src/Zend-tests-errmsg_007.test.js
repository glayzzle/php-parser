// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_007.phpt
  it("errmsg: can't use [] for reading - 2", function () {
    expect(parser.parseCode("<?php\n$a = array();\nisset($a[]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
