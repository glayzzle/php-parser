// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/bug78638.phpt
  it("FR: #78638 (__PHP_Incomplete_Class should be final)", function () {
    expect(parser.parseCode("<?php\n$c = new class('bar') extends __PHP_Incomplete_Class {\n};\n?>")).toMatchSnapshot();
  });
});
