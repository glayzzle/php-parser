// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/bug52240.phpt
  it("Bug #52240 (hash_copy() does not copy the HMAC key, causes wrong results and PHP crashes)", function () {
    expect(parser.parseCode("<?php\n$h = hash_init('md5', HASH_HMAC, '123456');\n$h2 = hash_copy($h);\nvar_dump(hash_final($h));\n$h3 = hash_copy($h2);\nvar_dump(hash_final($h2));\nvar_dump(hash_final($h3));\n?>")).toMatchSnapshot();
  });
});
