// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug79145.phpt
  it("Bug #79145 (openssl memory leak)", function () {
    expect(parser.parseCode("<?php\n$b = '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDaFhc31WeskqxwI+Si5R/fZrLK\npJOlABiI3RZfKCHJVrXl3IvcHDFM/BHKUJoSi/ee8GS9iw0G4Z1eCzJdthXxHARh\nj85Q5OliVxOdB1LoTOsOmfFf/fdvpU3DsOWsDKlVrL41MHxXorwrwOiys/r/gv2d\nC9C4JmhTOjBVAK8SewIDAQAC\n-----END PUBLIC KEY-----';\n$a = openssl_get_publickey($b);\n@openssl_free_key($a);\n$start = memory_get_usage(true);\n$a = openssl_get_publickey($b);\n@openssl_free_key($a);\n$end = memory_get_usage(true);\nvar_dump($end == $start);\n?>")).toMatchSnapshot();
  });
});
