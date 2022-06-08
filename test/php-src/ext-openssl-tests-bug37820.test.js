// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug37820.phpt
  it("openssl_sign/verify: accept different algos", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__;\n$file_pub = $dir . '/bug37820cert.pem';\n$file_key = $dir . '/bug37820key.pem';\n$priv_key = file_get_contents($file_key);\n$priv_key_id = openssl_get_privatekey($priv_key);\n$pub_key = file_get_contents($file_pub);\n$pub_key_id = openssl_get_publickey($pub_key);\n$data = \"some custom data\";\nif (!openssl_sign($data, $signature, $priv_key_id, OPENSSL_ALGO_MD5)) {\n    echo \"openssl_sign failed.\";\n}\n$ok = openssl_verify($data, $signature, $pub_key_id, OPENSSL_ALGO_MD5);\nif ($ok == 1) {\n    echo \"Ok\";\n} elseif ($ok == 0) {\n    echo \"openssl_verify failed.\";\n}\n?>")).toMatchSnapshot();
  });
});
