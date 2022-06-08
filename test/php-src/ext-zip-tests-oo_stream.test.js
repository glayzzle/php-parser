// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_stream.phpt
  it("getStream", function () {
    expect(parser.parseCode("<?php\n$dirname = __DIR__ . '/';\n$file = $dirname . 'test_with_comment.zip';\ninclude $dirname . 'utils.inc';\n$zip = new ZipArchive;\nif (!$zip->open($file)) {\n    exit('failed');\n}\n$fp = $zip->getStream('foo');\nvar_dump($fp);\nif(!$fp) exit(\"\\n\");\n$contents = '';\nwhile (!feof($fp)) {\n    $contents .= fread($fp, 255);\n}\nfclose($fp);\n$zip->close();\nvar_dump($contents);\n$fp = fopen('zip://' . __DIR__ . '/test_with_comment.zip#foo', 'rb');\nif (!$fp) {\n  exit(\"cannot open\\n\");\n}\n$contents = '';\nwhile (!feof($fp)) {\n  $contents .= fread($fp, 2);\n}\nvar_dump($contents);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
