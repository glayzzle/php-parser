// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_multi_filters_close.phpt
  it("Check if multiple filters are closed correctly and never called again after close", function () {
    expect(parser.parseCode("<?php\nclass FirstFilter extends php_user_filter {\n    public function filter($in, $out, &$consumed, $closing): int {\n        static $closed = 0;\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            stream_bucket_append($out, stream_bucket_new($this->stream, $bucket->data));\n        }\n        if ($closing) {\n            $closed++;\n        }\n        if ($closed > 0) {\n            var_dump($closed++);\n        }\n        return PSFS_PASS_ON;\n    }\n}\nclass SecondFilter extends php_user_filter {\n    public function filter($in, $out, &$consumed, $closing): int {\n        static $closed = 0;\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            stream_bucket_append($out, stream_bucket_new($this->stream, $bucket->data));\n        }\n        if ($closing) {\n            $closed++;\n        }\n        if ($closed > 0) {\n            var_dump($closed++);\n        }\n        return PSFS_PASS_ON;\n    }\n}\n$r = fopen(\"php://stdout\", \"w+\");\nstream_filter_register(\"first\", \"FirstFilter\");\nstream_filter_register(\"second\", \"SecondFilter\");\n$first = stream_filter_prepend($r, \"first\", STREAM_FILTER_WRITE, []);\n$second = stream_filter_prepend($r, \"second\", STREAM_FILTER_WRITE, []);\nfwrite($r, \"test\\n\");\nstream_filter_remove($second);\nstream_filter_remove($first);\n?>")).toMatchSnapshot();
  });
});
