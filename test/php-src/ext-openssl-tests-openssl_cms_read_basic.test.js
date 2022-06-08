// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_cms_read_basic.phpt
  it("openssl_cms_read() tests", function () {
    expect(parser.parseCode("<?php\n$infile = file_get_contents(__DIR__ . \"/cert.p7b\");\n$certfile = file_get_contents(__DIR__ . \"/cert.crt\");\n$result = [];\nvar_dump(openssl_cms_read(\"\", $result));\nvar_dump(openssl_cms_read($certfile, $result));\nvar_dump(openssl_cms_read($infile, $result));\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
