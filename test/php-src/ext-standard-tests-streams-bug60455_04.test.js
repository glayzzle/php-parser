// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug60455_04.phpt
  it("Bug #60455: stream_get_line and 1-line with maxlen size followed by 0-length\nread with EOL indication", function () {
    expect(parser.parseCode("<?php\nclass TestStream {\n    private $s = 0;\n    function stream_open($path, $mode, $options, &$opened_path) {\n            return true;\n    }\n    function stream_read($count) {\n        if ($this->s++ == 0)\n            return \"a\\n\";\n        return \"\";\n    }\n    function stream_eof() {\n        return $this->s >= 2;\n    }\n}\nstream_wrapper_register(\"test\", \"TestStream\");\n$f = fopen(\"test://\", \"r\");\nwhile (!feof($f)) {\n    $line = stream_get_line($f, 2, \"\\n\");\n    var_dump($line);\n}\n?>")).toMatchSnapshot();
  });
});
