// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug27508.phpt
  it("Bug #27508 (userspace wrappers have bogus eof indicator)", function () {
    expect(parser.parseCode("<?php\nclass FileStream {\n    public $fp;\n    function stream_open($path, $mode, $options, &$opened_path)\n    {\n        $url = urldecode(substr($path, 9));\n        $this->fp = fopen($url, $mode);\n        return true;\n    }\n    function stream_read($count)\n    {\n        return fread($this->fp, $count);\n    }\n    function stream_write($data)\n    {\n        return fwrite($this->fp, $data);\n    }\n    function stream_tell()\n    {\n        return ftell($this->fp);\n    }\n    function stream_eof()\n    {\n        if (!$this->fp) {\n            return true;\n        }\n        return feof($this->fp);\n    }\n    function stream_seek($offset, $whence)\n    {\n        return fseek($this->fp, $offset, $whence) == 0 ? true : false;\n    }\n}\nstream_wrapper_register(\"myFile\", \"FileStream\")\n    or die(\"Failed to register protocol\");\n$tmp_dir = __DIR__;\n$tn = tempnam($tmp_dir, 'foo');\nif (!$tn) {\n  die(\"tempnam failed\");\n}\n$fp = fopen(\"myFile://\" . urlencode($tn), \"w+\");\nif (!$fp) {\n  die(\"fopen failed\");\n}\nfwrite($fp, \"line1\\n\");\nfwrite($fp, \"line2\\n\");\nfwrite($fp, \"line3\\n\");\ndebug_zval_dump(feof($fp));\nrewind($fp);\necho ftell($fp) . \"\\n\";\ndebug_zval_dump(feof($fp));\nwhile ($fp && !feof($fp)) {\n    echo fgets($fp);\n}\nfclose($fp);\nunlink($tn);\n?>")).toMatchSnapshot();
  });
});
