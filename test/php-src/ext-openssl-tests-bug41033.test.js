// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug41033.phpt
  it("#41033, enable signing with DSA keys", function () {
    expect(parser.parseCode("<?php\n$prv = 'file://' . __DIR__ . '/' . 'bug41033.pem';\n$pub = 'file://' . __DIR__ . '/' . 'bug41033pub.pem';\n$prkeyid = openssl_get_privatekey($prv, \"1234\");\n$ct = \"Hello I am some text!\";\nopenssl_sign($ct, $signature, $prkeyid, OPENSSL_ALGO_SHA1);\necho \"Signature: \".base64_encode($signature) . \"\\n\";\n$pukeyid = openssl_get_publickey($pub);\n$valid = openssl_verify($ct, $signature, $pukeyid, OPENSSL_ALGO_SHA1);\necho \"Signature validity: \" . $valid . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
