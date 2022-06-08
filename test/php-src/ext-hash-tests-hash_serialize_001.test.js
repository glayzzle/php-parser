// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_serialize_001.phpt
  it("Hash: serialize()/unserialize()", function () {
    expect(parser.parseCode("<?php\n$algos = hash_algos();\nforeach ($algos as $algo) {\n    if (not_serializable($algo)) continue;\n    var_dump($algo);\n    $ctx0 = hash_init($algo);\n    $serial = serialize($ctx0);\n    assert(is_string($serial));\n    $ctx1 = unserialize($serial);\n    hash_update($ctx1, \"I can't remember anything\");\n    $serial = serialize($ctx1);\n    assert(is_string($serial));\n    var_dump(hash_final($ctx1));\n    $ctx2 = unserialize($serial);\n    var_dump(hash_final($ctx2));\n}\n// serialize/unserialize produces same results as all-on-one\nforeach ($algos as $algo) {\n    if (not_serializable($algo)) continue;\n    var_dump($algo);\n    $orig = hash_init($algo);\n    hash_update($orig, \"I can't remember anything\");\n    $serial = serialize($orig);\n    $fresh = hash_init($algo);\n    hash_update($fresh, \"I can't remember anythingCan’t tell if this is true or dream\");\n    var_dump(hash_final($fresh));\n    $copy = unserialize($serial);\n    hash_update($copy, \"Can’t tell if this is true or dream\");\n    var_dump(hash_final($copy));\n}\nfunction not_serializable(string $algo)\n{\n    return in_array($algo, [\"xxh3\", \"xxh128\"]);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
