// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_basic1.phpt
  it("assert() - basic - check  that assert can be switched off", function () {
    expect(parser.parseCode("<?php\nfunction f1()\n{\n    echo \"f1 called\\n\";\n}\nvar_dump($r2=assert(0));\nvar_dump($r2=assert(1));\n?>")).toMatchSnapshot();
  });
});
