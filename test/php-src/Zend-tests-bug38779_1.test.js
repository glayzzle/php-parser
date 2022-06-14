// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38779_1.phpt
  it("Bug #38779 (engine crashes when require()'ing file with syntax error through userspace stream wrapper)", function () {
    expect(parser.parseCode("<?php\nclass Loader {\n    private $position;\n    private $data;\n    public function stream_open($path, $mode, $options, &$opened_path)  {\n        $this->data = '<' . \"?php \\n\\\"\\\";ll l\\n ?\" . '>';\n        $this->position = 0;\n        return true;\n    }\n    function stream_read($count) {\n        $ret = substr($this->data, $this->position, $count);\n        $this->position += strlen($ret);\n        return $ret;\n    }\n    function stream_eof() {\n        return $this->position >= strlen($this->data);\n    }\n    function stream_flush() {\n        var_dump(\"flush!\");\n    }\n    function stream_close() {\n        @unlink(__DIR__.\"/bug38779.txt\");\n        var_dump(\"close!\");\n    }\n}\nstream_wrapper_register('Loader', 'Loader');\n$fp = fopen ('Loader://qqq.php', 'r');\n$filename = __DIR__.\"/bug38779.txt\";\n$fp1 = fopen($filename, \"w\");\nfwrite($fp1, \"<\".\"?php blah blah?\".\">\");\nfclose($fp1);\ninclude $filename;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
