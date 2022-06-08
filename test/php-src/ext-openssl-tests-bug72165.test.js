// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug72165.phpt
  it("Bug #72165 Null pointer dereference - openssl_csr_new", function () {
    expect(parser.parseCode("<?php\n$var0 = [0 => \"hello\", 1 => \"world\"];\n$options = ['config' => __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf'];\n$var2 = openssl_csr_new([0], $var0, $options, [0]);\n?>")).toMatchSnapshot();
  });
});
