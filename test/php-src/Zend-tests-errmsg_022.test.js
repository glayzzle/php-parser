// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_022.phpt
  it("errmsg: only variables can be passed by reference", function () {
    expect(parser.parseCode("<?php\nfunction foo (&$var) {\n}\nfoo(1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
