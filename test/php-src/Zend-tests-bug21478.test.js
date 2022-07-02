// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug21478.phpt
  it("Bug #21478 (Zend/zend_alloc.c :: shutdown_memory_manager produces segfault)", function () {
    expect(parser.parseCode("<?php\nclass debugfilter extends php_user_filter {\n  function filter($in, $out, &$consumed, $closing): int {\n    while ($bucket = stream_bucket_make_writeable($in)) {\n      $bucket->data = strtoupper($bucket->data);\n      stream_bucket_append($out, $bucket);\n      $consumed += strlen($bucket->data);\n    }\n    return PSFS_PASS_ON;\n  }\n}\nstream_filter_register(\"myfilter\",\"debugfilter\");\n$fp = fopen(__DIR__.\"/test.txt\",\"w\");\nstream_filter_append($fp, \"myfilter\");\nstream_filter_append($fp, \"myfilter\");\nstream_filter_append($fp, \"myfilter\");\nfwrite($fp, \"This is a test.\\n\");\nprint \"Done.\\n\";\nfclose($fp);\n// Uncommenting the following 'print' line causes the segfault to stop occurring\n// print \"2\\n\";\nreadfile(__DIR__.\"/test.txt\");\nunlink(__DIR__.\"/test.txt\");\n?>")).toMatchSnapshot();
  });
});
