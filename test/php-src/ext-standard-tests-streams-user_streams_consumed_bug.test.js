// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/user_streams_consumed_bug.phpt
  it("Testing user filter on streams", function () {
    expect(parser.parseCode("<?php\nclass Intercept extends php_user_filter\n{\n    public static $cache = '';\n    public function filter($in, $out, &$consumed, $closing): int\n    {\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            self::$cache .= $bucket->data;\n            $consumed += $bucket->datalen;\n            stream_bucket_append($out, $bucket);\n        }\n        return PSFS_PASS_ON;\n    }\n}\n$out = fwrite(STDOUT, \"Hello\\n\");\nvar_dump($out);\nstream_filter_register(\"intercept_filter\", \"Intercept\");\nstream_filter_append(STDOUT, \"intercept_filter\");\n$out = fwrite(STDOUT, \"Goodbye\\n\");\nvar_dump($out);\n?>")).toMatchSnapshot();
  });
});
