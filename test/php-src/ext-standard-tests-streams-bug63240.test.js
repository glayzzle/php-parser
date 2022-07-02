// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug63240.phpt
  it("Bug #63240: stream_get_line() return contains delimiter string", function () {
    expect(parser.parseCode("<?php\n$fd = fopen('php://temp', 'r+');\n$delimiter = 'MM';\n$str = str_repeat('.', 8191) . $delimiter . \"rest\";\nfwrite($fd, $str);\nrewind($fd);\n$line = stream_get_line($fd, 9000, $delimiter);\nvar_dump(strlen($line));\n$line = stream_get_line($fd, 9000, $delimiter);\nvar_dump($line);\n?>")).toMatchSnapshot();
  });
});
