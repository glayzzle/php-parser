// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/include_userstream_003.phpt
  it("allow_url_fopen disabled", function () {
    expect(parser.parseCode("<?php\nclass test {\n    private $data = '<?php echo \"Hello World\\n\";?>';\n    private $pos;\n    private $stream = null;\n    function stream_open($path, $mode, $options, &$opened_path)\n    {\n        if (strpos($path, \"test2://\") === 0) {\n            $this->stream = fopen(\"test1://\".substr($path, 8), $mode);\n            return !empty($this->stream);\n        }\n        if (strchr($mode, 'a'))\n            $this->pos = strlen($this->data);\n        else\n            $this->po = 0;\n        return true;\n    }\n    function stream_read($count)\n    {\n        if (!empty($this->stream)) {\n            return fread($this->stream, $count);\n        }\n        $ret = substr($this->data, $this->pos, $count);\n        $this->pos += strlen($ret);\n        return $ret;\n    }\n    function stream_tell()\n    {\n        if (!empty($this->stream)) {\n            return ftell($this->stream);\n        }\n        return $this->pos;\n    }\n    function stream_eof()\n    {\n        if (!empty($this->stream)) {\n            return feof($this->stream);\n        }\n        return $this->pos >= strlen($this->data);\n    }\n    function stream_seek($offset, $whence)\n    {\n        if (!empty($this->stream)) {\n            return fseek($this->stream, $offset, $whence);\n        }\n        switch($whence) {\n            case SEEK_SET:\n                if ($offset < $this->data && $offset >= 0) {\n                    $this->pos = $offset;\n                    return true;\n                } else {\n                    return false;\n                }\n                break;\n            case SEEK_CUR:\n                if ($offset >= 0) {\n                    $this->pos += $offset;\n                    return true;\n                } else {\n                    return false;\n                }\n                break;\n            case SEEK_END:\n                if (strlen($this->data) + $offset >= 0) {\n                    $this->pos = strlen($this->data) + $offset;\n                    return true;\n                } else {\n                    return false;\n                }\n                break;\n            default:\n                return false;\n        }\n    }\n}\nstream_register_wrapper(\"test1\", \"test\", STREAM_IS_URL);\nstream_register_wrapper(\"test2\", \"test\");\necho file_get_contents(\"test1://hello\"),\"\\n\";\ninclude \"test1://hello\";\necho file_get_contents(\"test2://hello\"),\"\\n\";\ninclude \"test2://hello\";\n?>")).toMatchSnapshot();
  });
});
