// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mod_006.phpt
  it("JIT MOD: 005", function () {
    expect(parser.parseCode("<?php\nfunction foo(){\n    $a = 1;\n    $b = $a % 0;\n    yield $b;\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
