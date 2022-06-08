// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug69152.phpt
  it("Bug #69152: Type Confusion Infoleak Vulnerability in unserialize()", function () {
    expect(parser.parseCode("<?php\n$x = unserialize('O:9:\"exception\":1:{s:16:\"'.\"\\0\".'Exception'.\"\\0\".'trace\";s:4:\"ryat\";}');\necho $x;\n$x =  unserialize('O:4:\"test\":1:{s:27:\"__PHP_Incomplete_Class_Name\";R:1;}');\n$x->test();\n?>")).toMatchSnapshot();
  });
});
