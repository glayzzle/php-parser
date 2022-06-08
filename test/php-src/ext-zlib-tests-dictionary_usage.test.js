// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/dictionary_usage.phpt
  it("Test dictionary usage on zlib methods", function () {
    expect(parser.parseCode("<?php\n$dict = range(\"a\", \"z\");\n$r = deflate_init(ZLIB_ENCODING_DEFLATE, [\"dictionary\" => $dict]);\n$a = deflate_add($r, \"abdcde\", ZLIB_FINISH);\nvar_dump($a);\n$r = deflate_init(ZLIB_ENCODING_DEFLATE, [\"dictionary\" => implode(\"\\0\", $dict).\"\\0\"]);\n$dictStr_a = deflate_add($r, \"abdcde\", ZLIB_FINISH);\nvar_dump($dictStr_a === $a);\n$r = inflate_init(ZLIB_ENCODING_DEFLATE, [\"dictionary\" => $dict]);\nvar_dump(inflate_add($r, $a, ZLIB_FINISH));\n$r = inflate_init(ZLIB_ENCODING_DEFLATE, [\"dictionary\" => [\"8\"] + range(\"a\", \"z\")]);\nvar_dump(inflate_add($r, $a, ZLIB_FINISH));\n?>")).toMatchSnapshot();
  });
});
