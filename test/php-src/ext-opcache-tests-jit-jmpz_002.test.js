// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/jmpz_002.phpt
  it("JIT JMPZ: Separate JMPZ for \"smart branch\" may be only emitted by function JIT", function () {
    expect(parser.parseCode("<?php\nfunction test($b) {\n    if ($b ? 0 : (X>0)){\n        echo \"Not taken\\n\";\n    }\n}\ntest(true);\n?>\nDONE")).toMatchSnapshot();
  });
});
