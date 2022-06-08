// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/compress_zlib_wrapper.phpt
  it("compress.zlib:// wrapper", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__. \"/../../..\");\n$pfx = str_repeat('../', substr_count($_SERVER['PHP_SELF'], '../'));\n// Relative path\n$fp = fopen(\"compress.zlib://{$pfx}ext/xsl/tests/xslt.xsl.gz\", \"rb\");\nfclose($fp);\n// Absolute path\n$fp = fopen(\"compress.zlib://\". __DIR__. \"/../../../ext/xsl/tests/xslt.xsl.gz\", \"rb\");\nfclose($fp);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
