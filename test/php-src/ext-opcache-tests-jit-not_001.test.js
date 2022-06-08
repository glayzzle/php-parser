// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/not_001.phpt
  it("JIT NOT: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo($x) {\n\treturn !$x;\n}\nvar_dump(foo(1));\nvar_dump(foo(0));\nvar_dump(foo(1.0));\nvar_dump(foo(0.0));\n?>")).toMatchSnapshot();
  });
});
