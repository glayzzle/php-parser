// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug72941.phpt
  it("Bug #72941 (Modifying bucket->data by-ref has no effect any longer)", function () {
    expect(parser.parseCode("<?php\nclass rotate_filter_nw extends php_user_filter\n{\n    function filter($in, $out, &$consumed, $closing): int\n    {\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            $this->rotate($bucket->data);\n            $consumed += $bucket->datalen;\n            stream_bucket_prepend($out, $bucket);\n        }\n        return PSFS_PASS_ON;\n    }\n    function rotate(&$data)\n    {\n        $n = strlen($data);\n        for ($i = 0; $i < $n - 1; ++$i) {\n            $data[$i] = $data[$i + 1];\n        }\n    }\n}\nstream_filter_register(\"rotator_notWorking\", rotate_filter_nw::class);\n$stream = fopen('php://memory', 'w+');\nfwrite($stream, 'hello, world');\nrewind($stream);\nstream_filter_append($stream, \"rotator_notWorking\");\nvar_dump(stream_get_contents($stream));\n?>")).toMatchSnapshot();
  });
});
