// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hmac-md5.phpt
  it("Hash: hmac-md5 algorithm", function () {
    expect(parser.parseCode("<?php\n/* Test Vectors from RFC 2104 */\n$ctx = hash_init('md5',HASH_HMAC,str_repeat(chr(0x0b), 16));\nhash_update($ctx, 'Hi There');\necho hash_final($ctx) . \"\\n\";\n$ctx = hash_init('md5',HASH_HMAC,'Jefe');\nhash_update($ctx, 'what do ya want for nothing?');\necho hash_final($ctx) . \"\\n\";\necho hash_hmac('md5', str_repeat(chr(0xDD), 50), str_repeat(chr(0xAA), 16)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
