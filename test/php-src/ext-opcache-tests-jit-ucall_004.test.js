// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ucall_004.phpt
  it("JIT UCALL: 004", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  var_dump(\"hello\");\n}\nfoo();\nfoo();\nfoo();\n?>")).toMatchSnapshot();
  });
});
