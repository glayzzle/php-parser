// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ignored_opcodes.phpt
  it("JIT: ignored opcodes", function () {
    expect(parser.parseCode("<?php\nfunction test(): int\n{\n    return 0;\n}\nexit(@test());\n?>")).toMatchSnapshot();
  });
});
