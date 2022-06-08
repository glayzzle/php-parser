// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug70091.phpt
  it("Bug #70091 (Phar does not mark UTF-8 filenames in ZIP archives)", function () {
    expect(parser.parseCode("<?php\n$phar = new PharData(__DIR__ . '/bug70091.zip');\n$phar->addFromString('föö', '');\n$phar->addFromString('foo', '');\nunset($phar);\n$stream = fopen(__DIR__ . '/bug70091.zip', 'r');\n$data = fread($stream, 8);\nvar_dump(unpack('H8sig/@6/nflags', $data));\nfseek($stream, 53);\n$data = fread($stream, 8);\nvar_dump(unpack('H8sig/@6/nflags', $data));\nfseek($stream, 104);\n$data = fread($stream, 10);\nvar_dump(unpack('H8sig/@8/nflags', $data));\nfseek($stream, 173);\n$data = fread($stream, 10);\nvar_dump(unpack('H8sig/@8/nflags', $data));\n?>")).toMatchSnapshot();
  });
});
