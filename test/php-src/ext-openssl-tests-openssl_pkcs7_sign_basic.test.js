// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkcs7_sign_basic.phpt
  it("openssl_pkcs7_sign() tests", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__ . \"/cert.crt\";\n$outfile = tempnam(sys_get_temp_dir(), \"ssl\");\nif ($outfile === false) {\n    die(\"failed to get a temporary filename!\");\n}\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$single_cert = \"file://\" . __DIR__ . \"/cert.crt\";\n$assoc_headers = array(\"To\" => \"test@test\", \"Subject\" => \"testing openssl_pkcs7_sign()\");\n$headers = array(\"test@test\", \"testing openssl_pkcs7_sign()\");\n$empty_headers = array();\n$wrong = \"wrong\";\n$empty = \"\";\nvar_dump(openssl_pkcs7_sign($infile, $outfile, openssl_x509_read($single_cert), $privkey, $headers));\nvar_dump(openssl_pkcs7_sign($infile, $outfile, $single_cert, $privkey, $headers));\nvar_dump(openssl_pkcs7_sign($infile, $outfile, $single_cert, $privkey, $assoc_headers));\nvar_dump(openssl_pkcs7_sign($infile, $outfile, $single_cert, $privkey, $empty_headers));\nvar_dump(openssl_pkcs7_sign($wrong, $outfile, $single_cert, $privkey, $headers));\nvar_dump(openssl_pkcs7_sign($empty, $outfile, $single_cert, $privkey, $headers));\nvar_dump(openssl_pkcs7_sign($infile, $empty, $single_cert, $privkey, $headers));\nvar_dump(openssl_pkcs7_sign($infile, $outfile, $wrong, $privkey, $headers));\nvar_dump(openssl_pkcs7_sign($infile, $outfile, $empty, $privkey, $headers));\nvar_dump(openssl_pkcs7_sign($infile, $outfile, $single_cert, $wrong, $headers));\nif (file_exists($outfile)) {\n    echo \"true\\n\";\n    unlink($outfile);\n}\n?>")).toMatchSnapshot();
  });
});
