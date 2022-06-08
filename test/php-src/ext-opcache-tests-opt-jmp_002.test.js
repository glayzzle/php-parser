// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/jmp_002.phpt
  it("JMP 002: JMP around unreachable FREE", function () {
    expect(parser.parseCode("<?php\n7??match(X){};\n?>\nDONE")).toMatchSnapshot();
  });
});
