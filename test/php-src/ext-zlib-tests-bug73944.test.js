// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug73944.phpt
  it("Bug #73944: Dictionary option of intflate_init() does not work", function () {
    expect(parser.parseCode("<?php\n$in = inflate_init(ZLIB_ENCODING_RAW, array('dictionary' => str_repeat(\"\\00\", 32768)));\n$a = inflate_add($in, file_get_contents(__DIR__.'/bug73944_fixture_1.data'));\necho '1 block: '.strlen($a).PHP_EOL;\n$in = inflate_init(ZLIB_ENCODING_RAW, array('dictionary' => $a));\n$b = inflate_add($in, file_get_contents(__DIR__.'/bug73944_fixture_2.data'));\necho '2 block: '.($b === false ? 'failed' : strlen($b)).PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
