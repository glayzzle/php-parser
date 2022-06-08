// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_hmac_basic.phpt
  it("Hash: hash_file() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash_hmac() : basic functionality ***\\n\";\n$content = \"This is a sample string used to test the hash_hmac function with various hashing algorithms\";\n$key = 'secret';\necho \"gost: \" . hash_hmac('gost', $content, $key) . \"\\n\";\necho \"haval128,3: \" . hash_hmac('haval128,3', $content, $key) . \"\\n\";\necho \"md2: \" . hash_hmac('md2', $content, $key) . \"\\n\";\necho \"md4: \" . hash_hmac('md4', $content, $key) . \"\\n\";\necho \"md5: \" . hash_hmac('md5', $content, $key) . \"\\n\";\necho \"ripemd128: \" . hash_hmac('ripemd128', $content, $key) . \"\\n\";\necho \"ripemd160: \" . hash_hmac('ripemd160', $content, $key) . \"\\n\";\necho \"ripemd256: \" . hash_hmac('ripemd256', $content, $key) . \"\\n\";\necho \"ripemd320: \" . hash_hmac('ripemd320', $content, $key) . \"\\n\";\necho \"sha1: \" . hash_hmac('sha1', $content, $key) . \"\\n\";\necho \"sha256: \" . hash_hmac('sha256', $content, $key) . \"\\n\";\necho \"sha384: \" . hash_hmac('sha384', $content, $key) . \"\\n\";\necho \"sha512: \" . hash_hmac('sha512', $content, $key) . \"\\n\";\necho \"snefru: \" . hash_hmac('snefru', $content, $key) . \"\\n\";\necho \"tiger192,3: \" . hash_hmac('tiger192,3', $content, $key) . \"\\n\";\necho \"whirlpool: \" . hash_hmac('whirlpool', $content, $key) . \"\\n\";\necho \"md5(raw): \" . bin2hex(hash_hmac('md5', $content, $key, TRUE)) . \"\\n\";\necho \"sha256(raw): \" . bin2hex(hash_hmac('sha256', $content, $key, TRUE)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
