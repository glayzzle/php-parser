// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug76859.phpt
  it("Bug #76859 (stream_get_line skips data if used with filters)", function () {
    expect(parser.parseCode("<?php\n$data = '123';\n$fh = fopen('php://memory', 'r+b');\nfwrite($fh, $data);\nrewind($fh);\nstream_filter_append($fh, 'string.rot13', STREAM_FILTER_READ);\n$out = '';\nwhile (!feof($fh)) {\n    $out .= stream_get_line($fh, 1024);\n}\nfclose($fh);\necho strlen($out) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
