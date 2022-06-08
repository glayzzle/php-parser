// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_cms_sign_verify_basic.phpt
  it("openssl_cms_sign() and openssl_cms_verify() tests", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__ . \"/plain.txt\";\n$outfile = tempnam(sys_get_temp_dir(), \"ssl\");\n$vout= $outfile . \".vout\";\nif ($outfile === false) {\n    die(\"failed to get a temporary filename!\");\n}\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$single_cert = \"file://\" . __DIR__ . \"/cert.crt\";\n$assoc_headers = array(\"To\" => \"test@test\", \"Subject\" => \"testing openssl_cms_sign()\");\n$headers = array(\"test@test\", \"testing openssl_cms_sign()\");\n$empty_headers = array();\n$wrong = \"wrong\";\n$empty = \"\";\nprint(\"Plain text:\\n\");\nreadfile($infile);\nvar_dump(openssl_cms_sign($infile, $outfile, openssl_x509_read($single_cert), $privkey, $headers));\nvar_dump(openssl_cms_verify($outfile,OPENSSL_CMS_NOVERIFY, NULL, array(), NULL, $vout));\nprint(\"\\nValidated content:\\n\");\nreadfile($vout);\nif (file_exists($outfile)) {\n    echo \"true\\n\";\n    unlink($outfile);\n}\nif (file_exists($vout)) {\n    echo \"true\\n\";\n    unlink($vout);\n}\n?>")).toMatchSnapshot();
  });
});
