// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug53603.phpt
  it("Bug #53603 (ZipArchive should quiet stat errors)", function () {
    expect(parser.parseCode("<?php\nclass TestStream {\n    function url_stat($path, $flags) {\n        if (!($flags & STREAM_URL_STAT_QUIET))\n            trigger_error(\"not quiet\");\n        return array();\n    }\n}\nstream_wrapper_register(\"teststream\", \"TestStream\");\n$dirname = __DIR__ . '/';\n$file = $dirname . 'test_with_comment.zip';\n$zip = new ZipArchive;\nif ($zip->open($file) !== TRUE) {\n    echo \"open failed.\\n\";\n    exit('failed');\n}\n$a = $zip->extractTo('teststream://test');\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
