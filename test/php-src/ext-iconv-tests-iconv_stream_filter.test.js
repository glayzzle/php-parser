// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_stream_filter.phpt
  it("iconv stream filter", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__.'/iconv_stream_filter.txt', 'rb');\nvar_dump(bin2hex(fread($fp, 10)));\nvar_dump(bin2hex(fread($fp, 5)));\nvar_dump(bin2hex(fread($fp, 1)));\nfclose($fp);\n$fp = fopen(__DIR__.'/iconv_stream_filter.txt', 'rb');\nstream_filter_append($fp, 'convert.iconv.ISO-2022-JP/EUC-JP');\nvar_dump(bin2hex(fread($fp, 10)));\nvar_dump(bin2hex(fread($fp, 5)));\nvar_dump(bin2hex(fread($fp, 1)));\nfclose($fp);\n$fp = fopen(__DIR__.'/iconv_stream_filter.txt', 'rb');\nstream_filter_append($fp, 'string.rot13'); // this will make conversion fail.\nstream_filter_append($fp, 'convert.iconv.ISO-2022-JP/EUC-JP');\nvar_dump(bin2hex(@fread($fp, 10)) != \"a4b3a4f3a4cba4c1a4cf\");\nvar_dump(bin2hex(fread($fp, 5)) != \"69636f6e76\");\nvar_dump(bin2hex(fread($fp, 1)) != \"0a\");\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
