// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_get_line.phpt
  it("Crash inside stream_get_line(), when length=0", function () {
    expect(parser.parseCode("<?php\n$path = __DIR__ . '/test.html';\nfile_put_contents($path, \"foo<br>bar<br>foo\");\n$fp = fopen($path, \"r\");\nwhile ($fp && !feof($fp)) {\n    echo stream_get_line($fp, 0, \"<br>\").\"\\n\";\n}\nfclose($fp);\n@unlink($path);\n?>")).toMatchSnapshot();
  });
});
