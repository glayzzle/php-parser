// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_file_stream_001.phpt
  it("finfo_file(): Files and directories inside an stream", function () {
    expect(parser.parseCode("<?php\n$fp = finfo_open(FILEINFO_MIME_TYPE);\n$results = array();\n$zip = __DIR__ . \"/resources/dir.zip\";\n$stream = \"zip://\" . __DIR__ . \"/resources/dir.zip\";\n$dir = $stream . \"#dir/\";\n$png = $stream . \"#dir/test.png\";\nvar_dump(\n         finfo_file($fp, $zip),\n         finfo_file($fp, $dir),\n         finfo_file($fp, $png)\n);\n?>")).toMatchSnapshot();
  });
});
