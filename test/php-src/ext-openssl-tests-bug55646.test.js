// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug55646.phpt
  it("Bug #55646: textual input in openssl_csr_new() is not expected in UTF-8", function () {
    expect(parser.parseCode("<?php\nfunction stringAsHex($string) {\n    $unpacked = unpack(\"H*\", $string);\n    return implode(\" \", str_split($unpacked[1],2));\n}\n$config = array(\n    \"digest_alg\" => \"sha1\",\n    \"x509_extensions\" => \"v3_ca\",\n    \"req_extensions\" => \"v3_req\",\n    \"private_key_bits\" => 2048,\n    \"private_key_type\" => OPENSSL_KEYTYPE_RSA,\n    \"encrypt_key\" => false,\n);\n$csr_info = array(\n    \"countryName\" => \"US\",\n    \"stateOrProvinceName\" => \"Utah\",\n    \"localityName\" => \"Lindon\",\n    \"organizationName\" => \"Chinese\",\n    \"organizationalUnitName\" => \"IT \\xe4\\xba\\x92\",\n    \"commonName\" => \"www.example.com\",\n);\n$private = openssl_pkey_new($config);\nwhile (openssl_error_string()) {}\n$csr_res = openssl_csr_new(\n    $csr_info,\n    $private,\n    ['config' => __DIR__. DIRECTORY_SEPARATOR . \"openssl.cnf\"]\n);\nif (!$csr_res) {\n    while ($e = openssl_error_string()) {\n        $err = $e;\n    }\n    die(\"Failed; last error: $err\");\n}\nopenssl_csr_export($csr_res, $csr);\n$output = openssl_csr_get_subject($csr);\necho \"A: \".$csr_info[\"organizationalUnitName\"].\"\\n\";\necho \"B: \".stringAsHex($csr_info[\"organizationalUnitName\"]).\"\\n\";\necho \"C: \".$output['OU'].\"\\n\";\necho \"D: \".stringAsHex($output['OU']).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
