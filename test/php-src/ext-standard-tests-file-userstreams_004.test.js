// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/userstreams_004.phpt
  it("User-space streams: stream_lock()", function () {
    expect(parser.parseCode("<?php\nclass test_wrapper_base {\n    public $mode;\n    function stream_open($path, $mode, $openedpath) {\n        return true;\n    }\n    function stream_eof() {\n        return false;\n    }\n}\nclass test_wrapper extends test_wrapper_base {\n    function stream_lock($mode) {\n        $this->mode = $mode;\n    }\n}\nfunction test($name, $fd, $mode) {\n    echo \"------ $name: -------\\n\";\n    flock($fd, $mode);\n    $data = stream_get_meta_data($fd);\n    var_dump($data['wrapper_data']->mode === $mode);\n}\nvar_dump(stream_wrapper_register('test', 'test_wrapper'));\nvar_dump(stream_wrapper_register('test2', 'test_wrapper_base'));\n$fd = fopen(\"test://foo\",\"r\");\n$fd2 = fopen(\"test2://foo\",\"r\");\ntest(\"stream_lock not implemented\", $fd2, LOCK_EX);\nforeach(array(\"LOCK_SH\",\"LOCK_EX\",\"LOCK_UN\") as $mode) {\n    test(\"fclock($mode)\", $fd, constant($mode));\n    test(\"fclock($mode|LOCK_NB)\", $fd, constant($mode)|LOCK_NB);\n}\n?>")).toMatchSnapshot();
  });
});
