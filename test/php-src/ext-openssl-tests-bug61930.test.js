// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug61930.phpt
  it("Bug #61930: openssl corrupts ssl key resource when using openssl_get_publickey()", function () {
    expect(parser.parseCode("<?php\n$cert = file_get_contents(__DIR__.'/cert.crt');\n$data = <<<DATA\nPlease verify me\nDATA;\n$sig = 'f9Gyb6NV/ENn7GUa37ygTLcF93XHf5fbFTnoYF/O+fXbq3iChGUbET0RuhOsptl' .\n        'AODi6JsDLnJO4ikcVZo0tC1fFTj3LyCuPy3ZdgJbbVxQ/rviROCmuMFTqUW/Xa2' .\n        'LQYiapeCCgLQeWTLg7TM/BoHEkKbKLG/XT5jHvep1758A=';\n$key = openssl_get_publickey($cert);\nvar_dump(openssl_get_publickey($key));\nvar_dump(openssl_verify($data, base64_decode($sig), $key));\n?>")).toMatchSnapshot();
  });
});
