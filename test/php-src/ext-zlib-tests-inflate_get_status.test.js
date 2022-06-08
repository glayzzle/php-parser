// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/inflate_get_status.phpt
  it("inflate_get_status()", function () {
    expect(parser.parseCode("<?php\n$uncompressed = \"Hello world.\";\n$random_junk = str_repeat(\"qebsouesl\", 128);\n$compressed = zlib_encode($uncompressed, ZLIB_ENCODING_DEFLATE);\n$compressed_len = strlen($compressed);\n$compressed .= $random_junk;\n$ctx = inflate_init(ZLIB_ENCODING_DEFLATE);\n$status = inflate_get_status($ctx);\n$buf = '';\nfor ($i = 0; $status == ZLIB_OK; ++$i)\n{\n    $buf .= inflate_add($ctx, substr($compressed, $i, 1));\n    echo '$i = ' . $i . ', ';\n    $status = inflate_get_status($ctx);\n    echo 'Status: ' . $status;\n    echo \"\\n\";\n}\necho '$buf = ' . $buf;\necho \"\\n\\n\";\necho \"Adding more data should reset the stream and result in a Z_OK (ZLIB_OK) status.\\n\";\ninflate_add($ctx, substr($compressed, 0, 12));\necho 'Status: ' . inflate_get_status($ctx);\n?>")).toMatchSnapshot();
  });
});
