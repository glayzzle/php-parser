// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug53579.phpt
  it("Bug #53579 (stream_get_contents() segfaults on ziparchive streams)", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . 'test_with_comment.zip';\ninclude $dirname . 'utils.inc';\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\n$fp = $zip->getStream('foo');\nvar_dump($fp);\nif(!$fp) exit(\"\\n\");\n$contents = stream_get_contents($fp);\nfclose($fp);\n$zip->close();\nvar_dump($contents);\n$fp = fopen('zip://' . __DIR__ . '/test_with_comment.zip#foo', 'rb');\nif (!$fp) {\n  exit(\"cannot open\\n\");\n}\n$contents = stream_get_contents($fp);\nvar_dump($contents);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
