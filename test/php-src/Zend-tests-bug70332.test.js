// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70332.phpt
  it("Bug #70332 (Wrong behavior while returning reference on object)", function () {
    expect(parser.parseCode("<?php\nfunction & test($arg) {\n    return $arg;\n}\n$arg = new Stdclass();\n$arg->name = array();\ntest($arg)->name[1] = \"xxxx\";\nprint_r($arg);\n?>")).toMatchSnapshot();
  });
});
