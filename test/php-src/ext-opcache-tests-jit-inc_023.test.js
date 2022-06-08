// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_023.phpt
  it("PRE_INC/DEC refcounted typed property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public string $prop;\n}\n$test = new Test;\n$test->prop = \"a\";\n++$test->prop;\n--$test->prop;\nvar_dump(++$test->prop);\nvar_dump(--$test->prop);\n?>")).toMatchSnapshot();
  });
});
