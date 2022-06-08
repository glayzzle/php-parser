// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_hkdf_error.phpt
  it("Hash: hash_hkdf() function: error conditions", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nfunction trycatch_dump(...$tests) {\n    foreach ($tests as $test) {\n        try {\n            var_dump($test());\n        }\n        catch (\\Error $e) {\n            echo '[' . get_class($e) . '] ' . $e->getMessage() . \"\\n\";\n        }\n    }\n}\n$ikm = 'input key material';\necho \"*** Testing hash_hkdf(): error conditions ***\\n\";\necho \"\\n-- Testing hash_hkdf() function with invalid hash algorithm --\\n\";\ntrycatch_dump(\n    fn() => hash_hkdf('foo', $ikm)\n);\necho \"\\n-- Testing hash_hkdf() function with non-cryptographic hash algorithm --\\n\";\ntrycatch_dump(\n    fn() => hash_hkdf('adler32', $ikm),\n    fn() => hash_hkdf('crc32', $ikm),\n    fn() => hash_hkdf('crc32b', $ikm),\n    fn() => hash_hkdf('fnv132', $ikm),\n    fn() => hash_hkdf('fnv1a32', $ikm),\n    fn() => hash_hkdf('fnv164', $ikm),\n    fn() => hash_hkdf('fnv1a64', $ikm),\n    fn() => hash_hkdf('joaat', $ikm)\n);\necho \"\\n-- Testing hash_hkdf() function with invalid parameters --\\n\";\ntrycatch_dump(\n    fn() => hash_hkdf('sha1', ''),\n    fn() => hash_hkdf('sha1', $ikm, -1),\n    fn() => hash_hkdf('sha1', $ikm, 20 * 255 + 1) // Length can't be more than 255 times the hash digest size\n)\n?>")).toMatchSnapshot();
  });
});
