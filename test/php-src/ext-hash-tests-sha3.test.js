// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha3.phpt
  it("Hash: sha3 algorithm", function () {
    expect(parser.parseCode("<?php\n// Test vectors taken from a combination of NIST FIPS-202,\n// Wikipedia reference vectors,\n// and output from reference implementation\n$subjects = [\n  '',\n  'a',\n  'The quick brown fox jumps over the lazy dog',\n  'The quick brown fox jumps over the lazy dog.',\n  str_repeat('a', 257),\n  str_repeat(\"\\xA3\", 200),\n];\nforeach ($subjects as $subject) {\n  echo '== ', urlencode($subject), \" ==\\n\";\n  foreach ([224, 256, 384, 512] as $bits) {\n    echo $bits, ': ', hash(\"sha3-$bits\", $subject), \"\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
