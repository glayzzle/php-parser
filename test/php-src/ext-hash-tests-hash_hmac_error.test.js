// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_hmac_error.phpt
  it("Hash: hash_hmac() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/hash/hash.c\n*/\necho \"*** Testing hash_hmac() : error conditions ***\\n\";\n$data = \"This is a sample string used to test the hash_hmac function with various hashing algorithms\";\n$key = 'secret';\necho \"\\n-- Testing hash_hmac() function with invalid hash algorithm --\\n\";\ntry {\n    var_dump(hash_hmac('foo', $data, $key));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_hmac() function with non-cryptographic hash algorithm --\\n\";\ntry {\n    var_dump(hash_hmac('crc32', $data, $key));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
