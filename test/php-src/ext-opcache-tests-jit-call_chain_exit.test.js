// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/call_chain_exit.phpt
  it("Exit in argument list", function () {
    expect(parser.parseCode("<?php\nvar_dump(exit);\n?>")).toMatchSnapshot();
  });
});
