// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/inflate_init_reuse.phpt
  it("Test incremental inflate_init() context reuse", function () {
    expect(parser.parseCode("<?php\n$resource = inflate_init(ZLIB_ENCODING_GZIP);\n$uncompressed = implode(range(\"a\",\"z\"));\n$compressed = gzencode($uncompressed);\n$inflated = \"\";\nfor ($i=0;$i<strlen($compressed);$i++) {\n    $inflated .= inflate_add($resource, $compressed[$i]);\n}\n$inflated .= inflate_add($resource, \"\", ZLIB_FINISH);\nassert($inflated === $uncompressed);\n// Now reuse the existing resource after finishing the previous operations ...\n$inflated = \"\";\nfor ($i=0;$i<strlen($compressed);$i++) {\n    $inflated .= inflate_add($resource, $compressed[$i]);\n}\n$inflated .= inflate_add($resource, \"\", ZLIB_FINISH);\nassert($inflated === $uncompressed);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
