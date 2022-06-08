// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/haval.phpt
  it("Hash: haval algorithm (multi-vector, multi-pass, multi-width)", function () {
    expect(parser.parseCode("<?php\necho \"Empty String\\n\";\nfor($pass=3; $pass<=5; $pass++)\n    for($bits=128; $bits <= 256; $bits += 32) {\n        $algo = sprintf('haval%d,%d',$bits,$pass);\n        echo $algo . ': ' . hash($algo,'') . \"\\n\";\n    }\necho \"\\\"abc\\\"\\n\";\nfor($pass=3; $pass<=5; $pass++)\n    for($bits=128; $bits <= 256; $bits += 32) {\n        $algo = sprintf('haval%d,%d',$bits,$pass);\n        echo $algo . ': ' . hash($algo,'abc') . \"\\n\";\n    }\necho \"\\\"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789\\\"\\n\";\nfor($pass=3; $pass<=5; $pass++)\n    for($bits=128; $bits <= 256; $bits += 32) {\n        $algo = sprintf('haval%d,%d',$bits,$pass);\n        echo $algo . ': ' . hash($algo,'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789') . \"\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
