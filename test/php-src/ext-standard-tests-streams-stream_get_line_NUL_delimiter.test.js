// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_line_NUL_delimiter.phpt
  it("Bug #60455: stream_get_line and \\0 as a delimiter", function () {
    expect(parser.parseCode("<?php\nclass TestStream {\n    private $s = 0;\n    function stream_open($path, $mode, $options, &$opened_path) {\n            return true;\n    }\n    function stream_read($count) {\n        if ($this->s++ == 0)\n            return \"a\\0\";\n        return \"\";\n    }\n    function stream_eof() {\n        return $this->s >= 2;\n    }\n}\nstream_wrapper_register(\"test\", \"TestStream\");\n$f = fopen(\"test://\", \"r\");\nvar_dump(stream_get_line($f, 100, \"\\0\"));\n?>")).toMatchSnapshot();
  });
});
