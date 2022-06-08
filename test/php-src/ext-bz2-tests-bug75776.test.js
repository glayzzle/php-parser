// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bug75776.phpt
  it("Bug #75776 (Flushing streams with compression filter is broken)", function () {
    expect(parser.parseCode("<?php\n$text = str_repeat('0123456789abcdef', 1000);\n$temp = fopen('php://temp', 'r+');\nstream_filter_append($temp, 'bzip2.compress', STREAM_FILTER_WRITE);\nfwrite($temp, $text);\nrewind($temp);\nvar_dump(bin2hex(stream_get_contents($temp)));\nvar_dump(ftell($temp));\nfclose($temp);\n?>")).toMatchSnapshot();
  });
});
