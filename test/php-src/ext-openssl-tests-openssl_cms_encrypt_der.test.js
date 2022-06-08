// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_cms_encrypt_der.phpt
  it("openssl_cms_encrypt() der test", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__ . \"/plain.txt\";\n$tname = tempnam(sys_get_temp_dir(), \"ssl\");\nif ($tname === false)\n    die(\"failed to get a temporary filename!\");\n$cryptfile= $tname . \".der\";\n$decryptfile = $tname . \".out\";\n$single_cert = \"file://\" . __DIR__ . \"/cert.crt\";\n$privkey = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\n$headers = array(\"test@test\", \"testing openssl_cms_encrypt()\");\n$cipher = OPENSSL_CIPHER_AES_128_CBC;\nvar_dump(openssl_cms_encrypt($infile, $cryptfile, $single_cert, $headers, OPENSSL_CMS_BINARY, OPENSSL_ENCODING_DER, $cipher));\nif (openssl_cms_decrypt($cryptfile, $decryptfile, $single_cert, $privkey, OPENSSL_ENCODING_DER) == false) {\n    print \"DER decrypt error\\n\";\n    print \"recipient:\\n\";\n    readfile($single_cert);\n    print \"input:\\n\";\n    readfile($infile);\n    $der=file_get_contents($cryptfile);\n    print \"outfile base64:\\n\" . base64_encode($der) . \"\\n--------\\n\";\n    while (( $errstr=openssl_error_string()) != false) {\n        print $errstr . \"\\n\";\n    }\n} else {\n    readfile($decryptfile);\n}\nif (file_exists($cryptfile)) {\n    echo \"true\\n\";\n    unlink($cryptfile);\n}\nif (file_exists($decryptfile)) {\n    echo \"true\\n\";\n    unlink($decryptfile);\n}\nunlink($tname);\n?>")).toMatchSnapshot();
  });
});
