// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_digest_basic.phpt
  it("openssl_digest() basic test", function () {
    expect(parser.parseCode("<?php\n$data = \"openssl_digest() basic test\";\n$method = \"md5\";\n$method2 = \"sha1\";\nvar_dump(openssl_digest($data, $method));\nvar_dump(openssl_digest($data, $method2));\n?>")).toMatchSnapshot();
  });
});
