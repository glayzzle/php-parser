// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_fingerprint_basic.phpt
  it("openssl_x509_fingerprint() tests", function () {
    expect(parser.parseCode("<?php\n$cert = \"file://\" . __DIR__ . \"/cert.crt\";\necho \"** Testing default functionality **\\n\";\nvar_dump(openssl_x509_fingerprint($cert));\necho \"** Testing hash method md5 **\\n\";\nvar_dump(openssl_x509_fingerprint($cert, 'md5'));\necho \"**Testing raw output md5 **\\n\";\nvar_dump(bin2hex(openssl_x509_fingerprint($cert, 'md5', true)));\necho \"** Testing hash method sha1 with resource **\\n\";\n$r = openssl_x509_read($cert);\nvar_dump(openssl_x509_fingerprint($r, 'sha1'));\necho \"** Testing bad certification **\\n\";\nvar_dump(openssl_x509_fingerprint('123'));\necho \"** Testing bad hash method **\\n\";\nvar_dump(openssl_x509_fingerprint($cert, 'xx45'));\n?>")).toMatchSnapshot();
  });
});
