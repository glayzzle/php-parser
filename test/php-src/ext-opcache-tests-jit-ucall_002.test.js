// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ucall_002.phpt
  it("JIT UCALL: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    var_dump(\"hello\");\n}\nfoo();\nvar_dump(\"world!\");\n?>")).toMatchSnapshot();
  });
});
