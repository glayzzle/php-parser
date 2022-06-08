// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug73586.phpt
  it("Bug #73586 (php_user_filter::$stream is not set to the stream the filter is working on).", function () {
    expect(parser.parseCode("<?php\nclass append_filter extends php_user_filter {\n    public $stream;\n    function filter($in, $out, &$consumed, $closing): int {\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            $consumed += $bucket->datalen;\n            stream_bucket_append($out, $bucket);\n        }\n        if ($closing) {\n            $bucket = stream_bucket_new($this->stream, \"FooBar\\n\");\n            stream_bucket_append($out, $bucket);\n        }\n        return PSFS_PASS_ON;\n    }\n}\nstream_filter_register(\"append\", \"append_filter\");\n$fin = fopen(__FILE__, 'rb');\nstream_filter_append($fin, 'append', STREAM_FILTER_READ);\nstream_copy_to_stream($fin, STDOUT);\n?>")).toMatchSnapshot();
  });
});
