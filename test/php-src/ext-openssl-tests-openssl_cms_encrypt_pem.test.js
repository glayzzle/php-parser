// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_cms_encrypt_pem.phpt
  it("openssl_cms_encrypt() pem test", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__ . \"/plain.txt\";\n$tname = tempnam(sys_get_temp_dir(), \"ssl\");\nif ($tname === false)\n    die(\"failed to get a temporary filename!\");\n$cryptfile= $tname . \".pem\";\n$decryptfile = $tname . \".pemout\";\n$single_cert = \"file://\" . __DIR__ . \"/cert.crt\";\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$headers = array(\"test@test\", \"testing openssl_cms_encrypt()\");\n$cipher = OPENSSL_CIPHER_AES_128_CBC;\nvar_dump(openssl_cms_encrypt($infile, $cryptfile, $single_cert, $headers, OPENSSL_CMS_BINARY, OPENSSL_ENCODING_PEM, $cipher));\nif (openssl_cms_decrypt($cryptfile, $decryptfile, $single_cert, $privkey, OPENSSL_ENCODING_PEM) == false) {\n    print \"PEM decrypt error\\n\";\n    print \"recipient:\\n\";\n    readfile($single_cert);\n    print \"input:\\n\";\n    readfile($infile);\n    print \"outfile:\\n\";\n    readfile($cryptfile);\n    while (( $errstr=openssl_error_string()) != false) {\n        print $errstr . \"\\n\";\n    }\n} else {\n    readfile($decryptfile);\n}\nif (file_exists($cryptfile)) {\n    echo \"true\\n\";\n    unlink($cryptfile);\n}\nif (file_exists($decryptfile)) {\n    echo \"true\\n\";\n    unlink($decryptfile);\n}\nunlink($tname);\n?>")).toMatchSnapshot();
  });
});
