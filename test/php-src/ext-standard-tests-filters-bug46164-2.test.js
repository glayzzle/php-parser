// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug46164-2.phpt
  it("Bug #46164 - 2 (stream_filter_remove() closes the stream)", function () {
    expect(parser.parseCode("<?php\nclass user_filter extends php_user_filter {\n    function filter($in, $out, &$consumed, $closing): int {\n        while($bucket = stream_bucket_make_writeable($in)) {\n            $consumed += $bucket->datalen;\n            stream_bucket_append($out, $bucket);\n        }\n        unset($this->stream);\n        return PSFS_PASS_ON;\n    }\n}\nstream_filter_register('user_filter','user_filter');\n$fd = fopen('php://memory','w');\n$filter = stream_filter_append($fd, 'user_filter');\nfwrite($fd, \"foo\");\nfflush($fd);\nvar_dump(fclose($fd));\n?>")).toMatchSnapshot();
  });
});
