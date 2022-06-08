// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/bug54350.phpt
  it("Bug #54350: Memory corruption with user_filter", function () {
    expect(parser.parseCode("<?php\nclass user_filter extends php_user_filter {\n    function filter($in, $out, &$consumed, $closing): int {\n        while ($bucket = stream_bucket_make_writeable($in)) {\n        }\n        try {\n            fclose($this->stream);\n        } catch (TypeError $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n        return 0;\n    }\n}\nstream_filter_register('user_filter','user_filter');\n$fd = fopen('php://memory','w');\n$filter = stream_filter_append($fd, 'user_filter');\nfwrite($fd, \"foo\");\n?>")).toMatchSnapshot();
  });
});
