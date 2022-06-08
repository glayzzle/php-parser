// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_006.phpt
  it("errmsg: can't use [] for reading", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$b = $a[];\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
