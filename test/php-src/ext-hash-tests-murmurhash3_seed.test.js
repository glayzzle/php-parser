// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/murmurhash3_seed.phpt
  it("Hash: MurmurHash3 seed", function () {
    expect(parser.parseCode("<?php\n$ctx = hash_init(\"murmur3f\", options: [\"seed\" => 42]);\nhash_update($ctx, \"Two\");\nhash_update($ctx, \" hashes\");\nhash_update($ctx, \" meet\");\nhash_update($ctx, \" in\");\nhash_update($ctx, \" a\");\nhash_update($ctx, \" bar.\");\n$h0 = hash_final($ctx);\necho $h0, \"\\n\";\n$h0 = hash(\"murmur3f\", \"Two hashes meet in a bar.\", options: [\"seed\" => 42]);\necho $h0, \"\\n\";\n$ctx = hash_init(\"murmur3c\", options: [\"seed\" => 106]);\nhash_update($ctx, \"Two\");\nhash_update($ctx, \" hashes\");\nhash_update($ctx, \" meet\");\nhash_update($ctx, \" in\");\nhash_update($ctx, \" a\");\nhash_update($ctx, \" bar.\");\n$h0 = hash_final($ctx);\necho $h0, \"\\n\";\n$h0 = hash(\"murmur3c\", \"Two hashes meet in a bar.\", options: [\"seed\" => 106]);\necho $h0, \"\\n\";\n$ctx = hash_init(\"murmur3a\", options: [\"seed\" => 2345]);\nhash_update($ctx, \"Two\");\nhash_update($ctx, \" hashes\");\nhash_update($ctx, \" meet\");\nhash_update($ctx, \" in\");\nhash_update($ctx, \" a\");\nhash_update($ctx, \" bar.\");\n$h0 = hash_final($ctx);\necho $h0, \"\\n\";\n$h0 = hash(\"murmur3a\", \"Two hashes meet in a bar.\", options: [\"seed\" => 2345]);\necho $h0, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
