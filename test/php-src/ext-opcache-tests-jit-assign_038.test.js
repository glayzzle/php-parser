// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_038.phpt
  it("JIT ASSIGN: Assign constant (with result)", function () {
    expect(parser.parseCode("<?php\n$a = $b = \"bb\";\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
