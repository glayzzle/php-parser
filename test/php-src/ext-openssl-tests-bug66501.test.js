// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug66501.phpt
  it("Bug #66501: EC private key support in openssl_sign", function () {
    expect(parser.parseCode("<?php\n$pkey = 'ASN1 OID: prime256v1\n-----BEGIN EC PARAMETERS-----\nBggqhkjOPQMBBw==\n-----END EC PARAMETERS-----\n-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEILPkqoeyM7XgwYkuSj3077lrsrfWJK5LqMolv+m2oOjZoAoGCCqGSM49\nAwEHoUQDQgAEPq4hbIWHvB51rdWr8ejrjWo4qVNWVugYFtPg/xLQw0mHkIPZ4DvK\nsqOTOnMoezkbSmVVMuwz9flvnqHGmQvmug==\n-----END EC PRIVATE KEY-----';\n$key = openssl_pkey_get_private($pkey);\n$res = openssl_sign($data ='alpha', $sign, $key, 'SHA1');\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
