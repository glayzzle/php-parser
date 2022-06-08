// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_copy_001.phpt
  it("Hash: hash_copy() basic tests", function () {
    expect(parser.parseCode("<?php\n$algos = hash_algos();\nforeach ($algos as $algo) {\n    var_dump($algo);\n    $orig = hash_init($algo);\n    hash_update($orig, \"I can't remember anything\");\n    $copy = hash_copy($orig);\n    var_dump(hash_final($orig));\n    var_dump(hash_final($copy));\n}\nforeach ($algos as $algo) {\n    var_dump($algo);\n    $orig = hash_init($algo);\n    hash_update($orig, \"I can't remember anything\");\n    $copy = hash_copy($orig);\n    var_dump(hash_final($orig));\n    hash_update($copy, \"Can’t tell if this is true or dream\");\n    var_dump(hash_final($copy));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
