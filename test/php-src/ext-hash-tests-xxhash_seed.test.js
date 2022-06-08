// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/xxhash_seed.phpt
  it("Hash: xxHash seed", function () {
    expect(parser.parseCode("<?php\nforeach ([\"xxh32\", \"xxh64\", \"xxh3\", \"xxh128\"] as $a) {\n\t$ctx = hash_init($a, options: [\"seed\" => 42]);\n\thash_update($ctx, \"Lorem\");\n\thash_update($ctx, \" ipsum dolor\");\n\thash_update($ctx, \" sit amet,\");\n\thash_update($ctx, \" consectetur adipiscing elit.\");\n\t$h0 = hash_final($ctx);\n\techo $h0, \"\\n\";\n\t$h0 = hash($a, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\", options: [\"seed\" => 42]);\n\techo $h0, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
