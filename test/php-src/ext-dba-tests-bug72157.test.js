// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug72157.phpt
  it("Bug #72157 (use-after-free caused by dba_open)", function () {
    expect(parser.parseCode("<?php\n$var0 = fopen(__FILE__,\"r\");\n$var5 = dba_open(null,$var0);\n$var5 = dba_open(null,$var0);\n$var5 = dba_open(null,$var0);\n$var5 = dba_open($var0,$var0);\n?>")).toMatchSnapshot();
  });
});
