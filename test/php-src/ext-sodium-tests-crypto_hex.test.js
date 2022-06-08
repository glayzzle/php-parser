// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/crypto_hex.phpt
  it("Check for libsodium bin2hex", function () {
    expect(parser.parseCode("<?php\n$bin = random_bytes(random_int(1, 1000));\n$hex = sodium_bin2hex($bin);\n$phphex = bin2hex($bin);\nvar_dump(strcasecmp($hex, $phphex));\n$bin2 = sodium_hex2bin($hex);\nvar_dump($bin2 === $bin);\n$bin2 = sodium_hex2bin('[' . $hex .']', '[]');\nvar_dump($bin2 === $bin);\n?>")).toMatchSnapshot();
  });
});
