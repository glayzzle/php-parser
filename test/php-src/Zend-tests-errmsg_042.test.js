// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_042.phpt
  it("errmsg: key element cannot be a reference", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\nforeach ($a as &$k=>$v) {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
