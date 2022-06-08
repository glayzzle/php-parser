// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkcs7_verify_basic.phpt
  it("openssl_pkcs7_verify() tests", function () {
    expect(parser.parseCode("<?php\n$outfile = tempnam(sys_get_temp_dir(), \"ssl\");\nif ($outfile === false) {\n    die(\"failed to get a temporary filename!\");\n}\n$contentfile = tempnam(sys_get_temp_dir(), \"ssl\");\nif ($contentfile === false) {\n    die(\"failed to get a temporary filename!\");\n}\n$pkcsfile = __DIR__ . \"/openssl_pkcs7_verify__pkcsfile.tmp\";\n$eml = __DIR__ . \"/signed.eml\";\n$wrong = \"wrong\";\n$empty = \"\";\n$cainfo = array();\nvar_dump(openssl_pkcs7_verify($wrong, 0));\nvar_dump(openssl_pkcs7_verify($empty, 0));\nvar_dump(openssl_pkcs7_verify($eml, 0));\nvar_dump(openssl_pkcs7_verify($eml, 0, $empty));\nvar_dump(openssl_pkcs7_verify($eml, PKCS7_NOVERIFY, $outfile));\nvar_dump(openssl_pkcs7_verify($eml, PKCS7_NOVERIFY, $outfile, $cainfo, $outfile, $contentfile));\nvar_dump(openssl_pkcs7_verify($eml, PKCS7_NOVERIFY, $outfile, $cainfo, $outfile, $contentfile, $pkcsfile));\nvar_dump(file_get_contents($pkcsfile));\nif (file_exists($outfile)) {\n    echo \"true\\n\";\n    unlink($outfile);\n}\nif (file_exists($contentfile)) {\n    echo \"true\\n\";\n    unlink($contentfile);\n}\n?>")).toMatchSnapshot();
  });
});
