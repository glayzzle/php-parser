// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug74022.phpt
  it("Bug #74022 PHP Fast CGI crashes when reading from a pfx file with valid password", function () {
    expect(parser.parseCode("<?php\n$pfx = __DIR__ . DIRECTORY_SEPARATOR . \"bug74022.pfx\";\n$cert_store = file_get_contents($pfx);\nvar_dump(openssl_pkcs12_read($cert_store, $cert_info, \"csos\"));\nvar_dump(openssl_error_string());\n?>")).toMatchSnapshot();
  });
});
