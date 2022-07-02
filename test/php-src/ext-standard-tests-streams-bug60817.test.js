// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug60817.phpt
  it("Bug #60817: stream_get_line() reads from stream even when there is already sufficient data buffered", function () {
    expect(parser.parseCode("<?php\nclass TestStream { //data, empty data, empty data + eof\n    private $s = 0;\n    function stream_open($path, $mode, $options, &$opened_path) {\n            return true;\n    }\n    function stream_read($count) {\n        echo \"Read done\\n\";\n        if ($this->s++ == 0)\n            return \"a\\nbb\\ncc\";\n        return \"\";\n    }\n    function stream_eof() {\n        return $this->s >= 2;\n    }\n}\nstream_wrapper_register(\"test\", \"TestStream\");\n$f = fopen(\"test://\", \"r\");\nwhile (!feof($f)) {\n    $line = stream_get_line($f, 99, \"\\n\");\n    var_dump($line);\n}\n?>")).toMatchSnapshot();
  });
});
