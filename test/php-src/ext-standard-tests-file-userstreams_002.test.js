// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/userstreams_002.phpt
  it("User-space streams: stream_cast()", function () {
    expect(parser.parseCode("<?php\nclass test_wrapper_base {\n    public $return_value;\n    function stream_open($path, $mode, $openedpath) {\n        return true;\n    }\n    function stream_eof() {\n        return false;\n    }\n}\nclass test_wrapper extends test_wrapper_base {\n    function stream_cast($castas) {\n        return $this->return_value;\n    }\n}\nfunction test($name, $fd, $return_value) {\n    echo \"\\n------ $name: -------\\n\";\n    $data = stream_get_meta_data($fd);\n    $data['wrapper_data']->return_value = $return_value;\n    $r = array($fd);\n    $w = $e = null;\n    try {\n        var_dump(stream_select($r, $w, $e, 0) !== false);\n    } catch (TypeError|ValueError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\nvar_dump(stream_wrapper_register('test', 'test_wrapper'));\nvar_dump(stream_wrapper_register('test2', 'test_wrapper_base'));\n$fd = fopen(\"test://foo\",\"r\");\n$fd2 = fopen(\"test2://foo\",\"r\");\ntest(\"valid stream\", $fd, STDIN);\ntest(\"stream_cast not implemented\", $fd2, null);\ntest(\"return value is false\", $fd, false);\ntest(\"return value not a stream resource\", $fd, \"foo\");\ntest(\"return value is stream itself\", $fd, $fd);\ntest(\"return value cannot be casted\", $fd, $fd2);\n?>")).toMatchSnapshot();
  });
});
