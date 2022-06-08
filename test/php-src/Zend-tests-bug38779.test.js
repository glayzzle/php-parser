// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38779.phpt
  it("Bug #38779 (engine crashes when require()'ing file with syntax error through userspace stream wrapper)", function () {
    expect(() => parser.parseCode("<?php\nclass Loader {\n    private $position;\n    private $data;\n    public function stream_open($path, $mode, $options, &$opened_path)  {\n        $this->data = '<' . \"?php \\n\\\"\\\";ll l\\n ?\" . '>';\n        $this->position = 0;\n        return true;\n    }\n    function stream_read($count) {\n        $ret = substr($this->data, $this->position, $count);\n        $this->position += strlen($ret);\n        return $ret;\n    }\n    function stream_eof() {\n        return $this->position >= strlen($this->data);\n    }\n    function stream_stat() {\n        return array('size' => strlen($this->data));\n    }\n    function stream_set_option($option, $arg1, $arg2) {\n        return false;\n    }\n}\nstream_wrapper_register('Loader', 'Loader');\nrequire 'Loader://qqq.php';\necho \"Done\\n\";\n?>")).toThrowErrorMatchingSnapshot();
  });
});
