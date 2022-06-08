// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug_52944.phpt
  it("Bug #52944 (segfault with zlib filter and corrupted data)", function () {
    expect(parser.parseCode("<?php\n/* NOTE this test can fail on asm builds of zlib 1.2.5 or\n   1.2.7 on at least Windows and Darwin. Using unoptimized\n   zlib build fixes the issue. */\nrequire __DIR__ . \"/bug_52944_corrupted_data.inc\";\n$fp = fopen('data://text/plain;base64,' . $data, 'r');\nstream_filter_append($fp, 'zlib.inflate', STREAM_FILTER_READ);\nvar_dump(fread($fp,1));\nvar_dump(fread($fp,1));\nfclose($fp);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
