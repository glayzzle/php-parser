// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug41353.phpt
  it("Bug #41353 (openssl_pkcs12_read() does not verify the type of the first arg)", function () {
    expect(parser.parseCode("<?php\n$a = 2;\nopenssl_pkcs12_read(1, $a, 1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
