// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_008.phpt
  it("errmsg: can't use [] for unsetting", function () {
    expect(parser.parseCode("<?php\n$a = array();\nunset($a[]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
