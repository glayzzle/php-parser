// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75230.phpt
  it("Bug #75230 (Invalid opcode 49/1/8 using opcache)", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n      $retval = false;\n        if ($retval) { }\n}\nf();\nexit(\"OK\");\n?>")).toMatchSnapshot();
  });
});
