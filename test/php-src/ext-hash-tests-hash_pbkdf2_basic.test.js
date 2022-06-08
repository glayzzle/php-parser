// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_pbkdf2_basic.phpt
  it("Hash: hash_pbkdf2() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash_pbkdf2() : basic functionality ***\\n\";\necho \"sha1: \" . hash_pbkdf2('sha1', 'password', 'salt', 1, 20).\"\\n\";\necho \"sha1(no length): \" . hash_pbkdf2('sha1', 'password', 'salt', 1).\"\\n\";\necho \"sha1(raw): \" . bin2hex(hash_pbkdf2('sha1', 'password', 'salt', 1, 20, TRUE)).\"\\n\";\necho \"sha1(rounds): \" . hash_pbkdf2('sha1', 'passwordPASSWORDpassword', 'saltSALTsaltSALTsaltSALTsaltSALTsalt', 4096, 25).\"\\n\";\necho \"sha1(rounds)(raw): \" . bin2hex(hash_pbkdf2('sha1', 'passwordPASSWORDpassword', 'saltSALTsaltSALTsaltSALTsaltSALTsalt', 4096, 25, TRUE)).\"\\n\";\necho \"sha256: \" . hash_pbkdf2('sha256', 'password', 'salt', 1, 20).\"\\n\";\necho \"sha256(no length): \" . hash_pbkdf2('sha256', 'password', 'salt', 1).\"\\n\";\necho \"sha256(raw): \" . bin2hex(hash_pbkdf2('sha256', 'password', 'salt', 1, 20, TRUE)).\"\\n\";\necho \"sha256(rounds): \" . hash_pbkdf2('sha256', 'passwordPASSWORDpassword', 'saltSALTsaltSALTsaltSALTsaltSALTsalt', 4096, 40).\"\\n\";\necho \"sha256(rounds)(raw): \" . bin2hex(hash_pbkdf2('sha256', 'passwordPASSWORDpassword', 'saltSALTsaltSALTsaltSALTsaltSALTsalt', 4096, 40, TRUE)).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
