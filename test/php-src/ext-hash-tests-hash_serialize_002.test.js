// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_serialize_002.phpt
  it("Hash: serialize()/unserialize() with HASH_HMAC", function () {
    expect(parser.parseCode("<?php\n$algos = hash_algos();\n$non_crypto = [\"adler32\", \"crc32\", \"crc32b\", \"crc32c\", \"fnv132\", \"fnv1a32\", \"fnv164\", \"fnv1a64\", \"joaat\", \"murmur3a\", \"murmur3c\", \"murmur3f\", \"xxh32\", \"xxh64\", \"xxh3\", \"xxh128\"];\n$key = \"This is the key that I have\";\nforeach ($algos as $algo) {\n    if (in_array($algo, $non_crypto)) {\n        continue;\n    }\n    var_dump($algo);\n    $ctx0 = hash_init($algo, HASH_HMAC, $key);\n    try {\n        $serial = serialize($ctx0);\n        assert(is_string($serial));\n    } catch (Throwable $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
