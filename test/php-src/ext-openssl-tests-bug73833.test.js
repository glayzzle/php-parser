// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug73833.phpt
  it("Bug #73833: null character not allowed in openssl_pkey_get_private", function () {
    expect(parser.parseCode("<?php\n$passwords = [\"abc\\x00defghijkl\", \"abcdefghikjl\"];\n$conf = ['config' => __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf'];\nforeach($passwords as $password) {\n    $key = openssl_pkey_new($conf);\n    if (openssl_pkey_export($key, $privatePEM, $password, $conf) === false) {\n        echo \"Failed to encrypt.\\n\";\n    } else {\n        echo \"Encrypted!\\n\";\n    }\n    if (openssl_pkey_get_private($privatePEM, $password) === false) {\n        echo \"Failed to decrypt.\\n\";\n    } else {\n        echo \"Decrypted!\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
