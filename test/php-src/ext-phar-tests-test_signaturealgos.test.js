// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/test_signaturealgos.phpt
  it("Phar: verify signature parsing works", function () {
    expect(parser.parseCode("<?php\n$a = new Phar(__DIR__ . '/files/sha1.phar');\n$r = $a->getSignature();\nvar_dump($r['hash_type']);\n$a = new Phar(__DIR__ . '/files/sha512.phar');\n$r = $a->getSignature();\nvar_dump($r['hash_type']);\n$a = new Phar(__DIR__ . '/files/sha256.phar');\n$r = $a->getSignature();\nvar_dump($r['hash_type']);\n$a = new Phar(__DIR__ . '/files/md5.phar');\n$r = $a->getSignature();\nvar_dump($r['hash_type']);\n$a = new Phar(__DIR__ . '/files/openssl.phar');\n$r = $a->getSignature();\nvar_dump($r['hash_type']);\n$a = new Phar(__DIR__ . '/files/openssl256.phar');\n$r = $a->getSignature();\nvar_dump($r['hash_type']);\n$a = new Phar(__DIR__ . '/files/openssl512.phar');\n$r = $a->getSignature();\nvar_dump($r['hash_type']);\n?>")).toMatchSnapshot();
  });
});
