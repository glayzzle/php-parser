// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug55754.phpt
  it("Bug #55754 (Only variables should be passed by reference for ZEND_SEND_PREFER_REF params)", function () {
    expect(parser.parseCode("<?php\ncurrent($arr = array(0 => \"a\"));\ncurrent(array(0 => \"a\"));\ncurrent($arr);\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
