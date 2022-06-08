// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_init_error.phpt
  it("Hash: hash_init() function - errors test", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash_init(): error conditions ***\\n\";\necho \"\\n-- Testing hash_init() function with unknown algorithms --\\n\";\ntry {\n    var_dump(hash_init('dummy'));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_init() function with HASH_HMAC and non-cryptographic algorithms --\\n\";\ntry {\n    var_dump(hash_init('crc32', HASH_HMAC));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_init() function with HASH_HMAC and no key --\\n\";\ntry {\n    var_dump(hash_init('md5', HASH_HMAC));\n}\ncatch (\\Error $e) {\n    echo  $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(hash_init('md5', HASH_HMAC, null));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
