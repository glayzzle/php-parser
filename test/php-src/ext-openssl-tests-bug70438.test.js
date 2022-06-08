// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug70438.phpt
  it("Request #70438: Add IV parameter for openssl_seal and openssl_open", function () {
    expect(parser.parseCode("<?php\n$data = \"openssl_seal() test\";\n$cipher = 'AES-128-CBC';\n$pub_key = \"file://\" . __DIR__ . \"/public.key\";\n$priv_key = \"file://\" . __DIR__ . \"/private_rsa_1024.key\";\ntry {\n    openssl_seal($data, $sealed, $ekeys, array($pub_key, $pub_key), $cipher);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nopenssl_seal($data, $sealed, $ekeys, array($pub_key, $pub_key), 'sparkles', $iv);\nopenssl_seal($data, $sealed, $ekeys, array($pub_key, $pub_key), $cipher, $iv);\nopenssl_open($sealed, $decrypted, $ekeys[0], $priv_key, $cipher, $iv);\necho $decrypted;\n?>")).toMatchSnapshot();
  });
});
