// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug35916.phpt
  it("Bug #35916 (Duplicate calls to stream_bucket_append() lead to a crash)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . \"/bug35916.txt\";\n@unlink($file);\nclass strtoupper_filter extends php_user_filter\n{\n    function filter($in, $out, &$consumed, $closing): int\n    {\n        while ($bucket=stream_bucket_make_writeable($in)) {\n            $bucket->data = strtoupper($bucket->data);\n            $consumed += $bucket->datalen;\n            stream_bucket_append($out, $bucket);\n            stream_bucket_append($out, $bucket);\n        }\n        return PSFS_PASS_ON;\n    }\n    function onCreate(): bool\n    {\n        echo \"fffffffffff\\n\";\n        return true;\n    }\n    function onClose(): void\n    {\n        echo \"hello\\n\";\n    }\n}\nstream_filter_register(\"strtoupper\", \"strtoupper_filter\");\n$fp=fopen($file, \"w\");\nstream_filter_append($fp,  \"strtoupper\");\nfread($fp, 1024);\nfwrite($fp, \"Thank you\\n\");\nfclose($fp);\nreadfile($file);\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
