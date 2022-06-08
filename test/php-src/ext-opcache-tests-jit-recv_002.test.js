// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/recv_002.phpt
  it("JIT RECV: too few arguments", function () {
    expect(parser.parseCode("<?php\nfunction test($a)\n{\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
