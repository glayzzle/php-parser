// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_update_stream_basic_001.phpt
  it("Ensure hash_update_stream() always returns the same hash when $length = 0", function () {
    expect(parser.parseCode("<?php\nfor ($j=0; $j<3; $j++)\n{\n    // Create pseudo-random hash\n    $bytes = openssl_random_pseudo_bytes(15, $cstrong);\n    $hash   = sha1(bin2hex($bytes));\n    // Create temp file with hash\n    $fp = tmpfile();\n    fwrite($fp, $hash);\n    rewind($fp);\n    // Stream it with 0 length and output hash\n    $ctx = hash_init('md5');\n    hash_update_stream($ctx, $fp, 0);\n    echo hash_final($ctx) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
