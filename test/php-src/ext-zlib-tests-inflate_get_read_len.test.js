// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/inflate_get_read_len.phpt
  it("inflate_get_read_len()", function () {
    expect(parser.parseCode("<?php\n$uncompressed = \"Hello world.\";\n$random_junk = str_repeat(\"qebsouesl\", 128);\n$compressed = zlib_encode($uncompressed, ZLIB_ENCODING_DEFLATE);\n$compressed_len = strlen($compressed);\n$compressed .= $random_junk;\n$ctx = inflate_init(ZLIB_ENCODING_DEFLATE);\n$buf = inflate_add($ctx, $compressed);\n$detected_compressed_len = inflate_get_read_len($ctx);\necho 'Status: ' . inflate_get_status($ctx) . \"\\n\";\necho 'Original compressed length: ' . $compressed_len . \"\\n\";\necho 'Detected compressed length: ' . $detected_compressed_len . \"\\n\";\necho ($compressed_len == $detected_compressed_len) ? 'The lengths are equal.' : 'The lengths are unequal.';\n?>")).toMatchSnapshot();
  });
});
