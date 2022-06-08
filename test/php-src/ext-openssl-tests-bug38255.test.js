// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug38255.phpt
  it("openssl key from zval leaks", function () {
    expect(parser.parseCode("<?php\n$pub_key_id = false;\n$signature = '';\n$ok = openssl_verify(\"foo\", $signature, $pub_key_id, OPENSSL_ALGO_MD5);\nclass test {\n    function __toString() {\n        return \"test object\";\n    }\n}\n$t = new test;\nvar_dump(openssl_verify(\"foo\", $signature, $pub_key_id, OPENSSL_ALGO_MD5));\nvar_dump(openssl_verify(\"foo\", $t, $pub_key_id, OPENSSL_ALGO_MD5));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
