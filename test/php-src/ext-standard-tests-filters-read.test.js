// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/read.phpt
  it("stream filter - reading", function () {
    expect(parser.parseCode("<?php\necho \"-TEST\\n\";\nclass strtoupper_filter extends php_user_filter {\n    function filter($in, $out, &$consumed, $closing): int\n    {\n        $output = 0;\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            $bucket->data = strtoupper($bucket->data);\n            $consumed += $bucket->datalen;\n            stream_bucket_append($out, $bucket);\n            $output = 1;\n        }\n        if ($closing) {\n            $bucket = stream_bucket_new($this->stream, \"\\n===close===\\n\");\n            stream_bucket_append($out, $bucket);\n            $output = 1;\n        }\n        return $output ? PSFS_PASS_ON : PSFS_FEED_ME;\n    }\n}\nstream_filter_register(\"strtoupper\", \"strtoupper_filter\")\n   or die(\"Failed to register filter\");\nif ($f = fopen(__FILE__, \"rb\")) {\n    stream_filter_append($f, \"strtoupper\");\n    while (!feof($f)) {\n        echo fread($f, 8192);\n    }\n    fclose($f);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
