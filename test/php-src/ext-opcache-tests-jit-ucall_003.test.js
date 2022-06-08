// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ucall_003.phpt
  it("JIT UCALL: 003", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  var_dump(\"hello\");\n}\nfunction bar() {\n  foo();\n}\nbar();\n?>")).toMatchSnapshot();
  });
});
