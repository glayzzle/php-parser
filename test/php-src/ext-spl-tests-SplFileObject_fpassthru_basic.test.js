// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fpassthru_basic.phpt
  it("SplFileObject::fpassthru function - basic functionality test", function () {
    expect(parser.parseCode("<?php\n$obj = New SplFileObject(__DIR__.'/SplFileObject_testinput.csv');\n$obj->fpassthru();\n?>")).toMatchSnapshot();
  });
});
