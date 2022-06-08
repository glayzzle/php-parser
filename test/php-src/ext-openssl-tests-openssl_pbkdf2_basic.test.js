// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pbkdf2_basic.phpt
  it("openssl_pbkdf2() tests", function () {
    expect(parser.parseCode("<?php\n// official test vectors\nvar_dump(bin2hex(openssl_pbkdf2('password', 'salt', 20, 1)));\nvar_dump(bin2hex(openssl_pbkdf2('password', 'salt', 20, 2)));\nvar_dump(bin2hex(openssl_pbkdf2('password', 'salt', 20, 4096)));\n/* really slow but should be:\nstring(40) \"eefe3d61cd4da4e4e9945b3d6ba2158c2634e984\"\nvar_dump(bin2hex(openssl_pbkdf2('password', 'salt', 20, 16777216)));\n*/\nvar_dump(bin2hex(openssl_pbkdf2('passwordPASSWORDpassword', 'saltSALTsaltSALTsaltSALTsaltSALTsalt', 25, 4096)));\nvar_dump(bin2hex(openssl_pbkdf2(\"pass\\0word\", \"sa\\0lt\", 16, 4096)));\n?>")).toMatchSnapshot();
  });
});
