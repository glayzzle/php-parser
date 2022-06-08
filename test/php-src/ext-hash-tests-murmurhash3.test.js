// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/murmurhash3.phpt
  it("Hash: MurmurHash3 test", function () {
    expect(parser.parseCode("<?php\n$h = hash(\"murmur3a\", \"foo\");\necho $h, \"\\n\";\n$h = hash(\"murmur3c\", \"Two hashes meet in a bar\", false);\necho $h, \"\\n\";\n$h = hash(\"murmur3c\", \"hash me!\");\necho $h, \"\\n\";\n$h = hash(\"murmur3f\", \"Two hashes meet in a bar\", false);\necho $h, \"\\n\";\n$h = hash(\"murmur3f\", \"hash me!\");\necho $h, \"\\n\";\n$ctx = hash_init(\"murmur3a\");\nhash_update($ctx, \"hello\");\nhash_update($ctx, \" there\");\n$h0 = hash_final($ctx);\n$h1 = hash(\"murmur3a\", \"hello there\");\necho $h0, \" \", $h1, \"\\n\";\n$ctx = hash_init(\"murmur3c\");\nhash_update($ctx, \"hello\");\nhash_update($ctx, \" there\");\n$h0 = hash_final($ctx);\n$h1 = hash(\"murmur3c\", \"hello there\");\necho $h0, \" \", $h1, \"\\n\";\n$ctx = hash_init(\"murmur3f\");\nhash_update($ctx, \"hello\");\nhash_update($ctx, \" there\");\n$h0 = hash_final($ctx);\n$h1 = hash(\"murmur3f\", \"hello there\");\necho $h0, \" \", $h1, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
