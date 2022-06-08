// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug61124.phpt
  it("Bug #61124: Segmentation fault with openssl_decrypt", function () {
    expect(parser.parseCode("<?php\nvar_dump(openssl_decrypt('kzo w2RMExUTYQXW2Xzxmg==', 'aes-128-cbc', 'pass', false, 'pass'));\n?>")).toMatchSnapshot();
  });
});
