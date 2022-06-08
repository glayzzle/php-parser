// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_stream_filter_delimiter.phpt
  it("iconv stream filter", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__.'/iconv_stream_filter.txt', 'rb');\nvar_dump(bin2hex(fread($fp, 10)));\nvar_dump(bin2hex(fread($fp, 5)));\nvar_dump(bin2hex(fread($fp, 1)));\nfclose($fp);\n$fp = fopen(__DIR__.'/iconv_stream_filter.txt', 'rb');\nstream_filter_append($fp, 'convert.iconv.ISO-2022-JP/EUC-JP');\nvar_dump(bin2hex(fread($fp, 10)));\nvar_dump(bin2hex(fread($fp, 5)));\nvar_dump(bin2hex(fread($fp, 1)));\nfclose($fp);\n$fp = fopen(__DIR__.'/iconv_stream_filter.txt', 'rb');\nstream_filter_append($fp, 'convert.iconv.ISO-2022-JP.EUC-JP');\nvar_dump(bin2hex(fread($fp, 10)));\nvar_dump(bin2hex(fread($fp, 5)));\nvar_dump(bin2hex(fread($fp, 1)));\nfclose($fp);\n$fp = fopen(__DIR__.'/iconv_stream_filter.txt', 'rb');\nstream_filter_append($fp, 'convert.iconv.ISO-2022-JP\\0EUC-JP');\nvar_dump(bin2hex(fread($fp, 10)));\nvar_dump(bin2hex(fread($fp, 5)));\nvar_dump(bin2hex(fread($fp, 1)));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
