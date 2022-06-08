// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_hmac_file_error.phpt
  it("Hash: hash_hmac_file() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash() : error conditions ***\\n\";\n$file = __DIR__ . \"hash_file.txt\";\n$key = 'secret';\necho \"\\n-- Testing hash_hmac_file() function with invalid hash algorithm --\\n\";\ntry {\n    var_dump(hash_hmac_file('foo', $file, $key, TRUE));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_hmac_file() function with non-cryptographic hash algorithm --\\n\";\ntry {\n    var_dump(hash_hmac_file('crc32', $file, $key, TRUE));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_hmac_file() function with bad path --\\n\";\ntry {\n    var_dump(hash_hmac_file('md5', $file.chr(0).$file, $key, TRUE));\n}\ncatch (ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
