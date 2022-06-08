// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/set_file_buffer.phpt
  it("int set_file_buffer ( resource $stream , int $buffer );", function () {
    expect(parser.parseCode("<?php\nclass test_wrapper {\n  function stream_open($path, $mode, $openedpath) {\n    return true;\n  }\n  function stream_eof() {\n    return false;\n  }\n  function stream_write($data) {\n    echo \"size: \", strlen($data), \"\\n\";\n    return strlen($data);\n  }\n  function stream_set_option($option, $arg1, $arg2) {\n    echo \"option: \", $option, \", \", $arg1, \", \", $arg2, \"\\n\";\n    return false;\n  }\n}\nvar_dump(stream_wrapper_register('test', 'test_wrapper'));\n$fd = fopen(\"test://foo\",\"r\");\nvar_dump(set_file_buffer($fd, 50));\nvar_dump(stream_set_chunk_size($fd, 42));\nvar_dump(fwrite($fd, str_repeat('0', 70)));\n?>")).toMatchSnapshot();
  });
});
