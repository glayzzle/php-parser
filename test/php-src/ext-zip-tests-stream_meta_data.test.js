// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/stream_meta_data.phpt
  it("stream_get_meta_data() on zip stream", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . 'test_with_comment.zip';\ninclude $dirname . 'utils.inc';\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\n$fp = $zip->getStream('foo');\nif(!$fp) exit(\"\\n\");\nvar_dump(stream_get_meta_data($fp));\nfclose($fp);\n$zip->close();\n$fp = fopen('zip://' . __DIR__ . '/test_with_comment.zip#foo', 'rb');\nif (!$fp) {\n  exit(\"cannot open\\n\");\n}\nvar_dump(stream_get_meta_data($fp));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
