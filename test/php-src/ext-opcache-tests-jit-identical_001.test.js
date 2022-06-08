// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/identical_001.phpt
  it("JIT IDENTICAL: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo($a, $b) {\n\treturn $a === $b;\n}\nvar_dump(foo(0, 0));\nvar_dump(foo(0, 1));\nvar_dump(foo(0, 0.0));\nvar_dump(foo(0.0, 0.0));\nvar_dump(foo(0.0, 1.0));\nvar_dump(foo(\"ab\", \"ab\"));\nvar_dump(foo(\"ab\", \"cd\"));\n?>")).toMatchSnapshot();
  });
});
