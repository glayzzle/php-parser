// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug35781.phpt
  it("Bug #35781 (stream_filter_append() causes segfault)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/bug35781.txt\";\n$fp = fopen($filename, \"w\");\nstream_filter_append($fp, \"string.rot13\", -49);\nfwrite($fp, \"This is a test\\n\");\nrewind($fp);\nfpassthru($fp);\nfclose($fp);\nvar_dump(file_get_contents($filename));\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
