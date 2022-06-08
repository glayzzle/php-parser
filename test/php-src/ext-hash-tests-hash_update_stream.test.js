// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_update_stream.phpt
  it("Hash: hash_update_stream() test", function () {
    expect(parser.parseCode("<?php\n$fp = tmpfile();\nfwrite($fp, 'The quick brown fox jumped over the lazy dog.');\nrewind($fp);\n$ctx = hash_init('md5');\nhash_update_stream($ctx, $fp);\necho hash_final($ctx);\n?>")).toMatchSnapshot();
  });
});
