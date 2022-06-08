// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/deflate_init_reuse.phpt
  it("Test incremental deflate_init() context reuse", function () {
    expect(parser.parseCode("<?php\n$resource = deflate_init(ZLIB_ENCODING_DEFLATE);\nforeach (range(\"a\", \"z\") as $char) {\n    deflate_add($resource, $char);\n}\ndeflate_add($resource, \"\", ZLIB_FINISH);\n// Now reuse the existing resource after finishing the previous operations ...\n$uncompressed = $compressed = \"\";\nforeach (range(\"a\", \"z\") as $char) {\n    $uncompressed .= $char;\n    $compressed .= deflate_add($resource, $char, ZLIB_NO_FLUSH);\n}\n$compressed .= deflate_add($resource, \"\", ZLIB_FINISH);\nassert($uncompressed === zlib_decode($compressed));\n?>\n===DONE===")).toMatchSnapshot();
  });
});
