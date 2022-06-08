// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug74240.phpt
  it("Bug #74240 (deflate_add can allocate too much memory)", function () {
    expect(parser.parseCode("<?php\nini_set('memory_limit', '64M');\n$deflator = deflate_init(ZLIB_ENCODING_RAW);\n$bytes = str_repeat(\"*\", 65536);\n// this crashes after about 500 iterations if PHP is\n// configured for 64M\nfor ($i = 0; $i < 1000; $i++) {\n    $output = deflate_add(\n        $deflator,\n        $bytes,\n        ZLIB_SYNC_FLUSH\n    );\n}\necho \"Completed\\n\";\n?>")).toMatchSnapshot();
  });
});
