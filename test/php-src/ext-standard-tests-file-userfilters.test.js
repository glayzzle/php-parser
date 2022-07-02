// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/userfilters.phpt
  it("stream userfilter test", function () {
    expect(parser.parseCode("<?php\nclass testfilter extends php_user_filter {\n  function filter($in, $out, &$consumed, $closing): int {\n    while ($bucket = stream_bucket_make_writeable($in)) {\n      $bucket->data = strtoupper($bucket->data);\n      $consumed += strlen($bucket->data);\n      stream_bucket_append($out, $bucket);\n    }\n    return PSFS_PASS_ON;\n  }\n  function oncreate(): bool {\n    echo \"params: {$this->params}\\n\";\n    return true;\n  }\n}\nstream_filter_register('testfilter','testfilter');\n$text = \"Hello There!\";\n$fp = tmpfile();\nfwrite($fp, $text);\nrewind($fp);\nstream_filter_append($fp, 'testfilter', STREAM_FILTER_READ, 'testuserfilter');\nvar_dump(fgets($fp));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
