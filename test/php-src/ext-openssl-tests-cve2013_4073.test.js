// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/cve2013_4073.phpt
  it("CVE 2013-4073: Null-byte certificate handling", function () {
    expect(parser.parseCode("<?php\n$cert = file_get_contents(__DIR__ . '/cve2013_4073.pem');\n$info = openssl_x509_parse($cert);\nvar_export($info['extensions']);\n?>")).toMatchSnapshot();
  });
});
