// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug39551.phpt
  it("Bug #39551 (Segfault with stream_bucket_new in user filter)", function () {
    expect(parser.parseCode("<?php\n$bucket = stream_bucket_new(fopen('php://temp', 'w+'), '');\nclass bucketFilter {\n    public function filter($in, $out, &$consumed, $closing ): int {\n        $bucket = stream_bucket_new(fopen('php://temp', 'w+'), '');\n        stream_bucket_append($out, $bucket);\n        return PSFS_PASS_ON;\n    }\n}\nstream_filter_register('bucketfault', 'bucketFilter');\nstream_filter_append($s = fopen('php://temp', 'r+'), 'bucketfault');\nstream_get_contents($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
