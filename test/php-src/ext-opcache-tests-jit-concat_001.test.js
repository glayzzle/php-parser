// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/concat_001.phpt
  it("JIT CONCAT: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo($a, $b) {\n\treturn $a . $b;\n}\nvar_dump(foo(\"a\", \"b\"));\nvar_dump(foo(\"a\", 5));\n?>")).toMatchSnapshot();
  });
});
