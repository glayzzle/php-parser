// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug38450_1.phpt
  it("Bug #38450 (constructor is not called for classes used in userspace stream wrappers)", function () {
    expect(parser.parseCode("<?php\nclass VariableStream {\n    var $position;\n    var $varname;\n    function __construct($var = null) {\n        var_dump(\"constructor!\");\n    }\n    function stream_open($path, $mode, $options, &$opened_path)\n    {\n        $url = parse_url($path);\n        $this->varname = $url[\"host\"];\n        $this->position = 0;\n        return true;\n    }\n    function stream_read($count)\n    {\n        $ret = substr($GLOBALS[$this->varname], $this->position, $count);\n        $this->position += strlen($ret);\n        return $ret;\n    }\n    function stream_write($data)\n    {\n        $left = substr($GLOBALS[$this->varname], 0, $this->position);\n        $right = substr($GLOBALS[$this->varname], $this->position + strlen($data));\n        $GLOBALS[$this->varname] = $left . $data . $right;\n        $this->position += strlen($data);\n        return strlen($data);\n    }\n    function stream_tell()\n    {\n        return $this->position;\n    }\n    function stream_eof()\n    {\n        return $this->position >= strlen($GLOBALS[$this->varname]);\n    }\n    function stream_seek($offset, $whence)\n    {\n        switch ($whence) {\n        case SEEK_SET:\n            if ($offset < strlen($GLOBALS[$this->varname]) && $offset >= 0) {\n                $this->position = $offset;\n                return true;\n            } else {\n                return false;\n            }\n            break;\n        case SEEK_CUR:\n            if ($offset >= 0) {\n                $this->position += $offset;\n                return true;\n            } else {\n                return false;\n            }\n            break;\n        case SEEK_END:\n            if (strlen($GLOBALS[$this->varname]) + $offset >= 0) {\n                $this->position = strlen($GLOBALS[$this->varname]) + $offset;\n                return true;\n            } else {\n                return false;\n            }\n            break;\n        default:\n            return false;\n        }\n    }\n}\nstream_wrapper_register(\"var\", \"VariableStream\")\n    or die(\"Failed to register protocol\");\n$myvar = \"\";\n$fp = fopen(\"var://myvar\", \"r+\");\nfwrite($fp, \"line1\\n\");\nfwrite($fp, \"line2\\n\");\nfwrite($fp, \"line3\\n\");\nrewind($fp);\nwhile (!feof($fp)) {\n    echo fgets($fp);\n}\nfclose($fp);\nvar_dump($myvar);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
