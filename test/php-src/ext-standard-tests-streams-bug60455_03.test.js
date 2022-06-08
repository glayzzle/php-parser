// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug60455_03.phpt
  it("Bug #60455: stream_get_line and 2 lines, one possibly empty", function () {
    expect(parser.parseCode("<?php\nclass TestStream {\n    private $lines = array();\n    private $s = 0;\n    private $eofth = 3;\n    function stream_open($path, $mode, $options, &$opened_path) {\n            $this->lines[] = \"a\\n\";\n            $this->lines[] = ($path == \"test://nonempty2nd\" ? \"b\\n\" : \"\\n\");\n            if ($path == \"test://eofafter2nd\")\n                $this->eofth = 2;\n            return true;\n    }\n    function stream_read($count) {\n        if (key_exists($this->s++, $this->lines))\n            return $this->lines[$this->s - 1];\n        return \"\";\n    }\n    function stream_eof() {\n        return $this->s >= $this->eofth;\n    }\n}\nstream_wrapper_register(\"test\", \"TestStream\");\n$f = fopen(\"test://nonempty2nd\", \"r\");\nwhile (!feof($f)) {\n    $line = stream_get_line($f, 99, \"\\n\");\n    var_dump($line);\n}\n$f = fopen(\"test://\", \"r\");\nwhile (!feof($f)) {\n    $line = stream_get_line($f, 99, \"\\n\");\n    var_dump($line);\n}\n$f = fopen(\"test://eofafter2nd\", \"r\");\nwhile (!feof($f)) {\n    $line = stream_get_line($f, 99, \"\\n\");\n    var_dump($line);\n}\n?>")).toMatchSnapshot();
  });
});
