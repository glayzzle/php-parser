// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_update_file.phpt
  it("Hash: hash_update_file() test", function () {
    expect(parser.parseCode("<?php\n$filePath = __DIR__ . DIRECTORY_SEPARATOR . 'hash_update_stream.txt';\nfile_put_contents($filePath, 'The quick brown fox jumped over the lazy dog.');\n$ctx = hash_init('md5');\nvar_dump(hash_update_file($ctx, $filePath));\necho hash_final($ctx);\n?>")).toMatchSnapshot();
  });
});
