// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bz2_filter_decompress.phpt
  it("bzip2.decompress (with convert.base64-decode)", function () {
    expect(parser.parseCode("<?php\n$text = 'QlpoNDFBWSZTWRN6QG0AAAoVgECFACA395UgIABIintI1N6mpowIQ0E1MTTAQGYTNcRyMZm5kgW3ib7hVboE7Tmqj3ToGZ5G3q1ZauD2G58hibSck8KS95EEAbx1Cn+LuSKcKEgJvSA2gA==';\n$fp = fopen('php://stdout', 'w');\nstream_filter_append($fp, 'convert.base64-decode', STREAM_FILTER_WRITE);\nstream_filter_append($fp, 'bzip2.decompress', STREAM_FILTER_WRITE);\nfwrite($fp, $text);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
