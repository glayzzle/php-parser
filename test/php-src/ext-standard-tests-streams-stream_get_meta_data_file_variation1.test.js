// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_file_variation1.phpt
  it("stream_get_meta_data() with differing file access modes", function () {
    expect(parser.parseCode("<?php\n// array of all file access modes\n$filemodes = array('r', 'r+', 'w', 'w+', 'a', 'a+', 'x', 'x+',\n                   'rb', 'rb+', 'wb', 'wb+', 'ab', 'ab+', 'xb', 'xb+',\n                   'rt', 'rt+', 'wt', 'wt+', 'at', 'at+', 'xt', 'xt+');\n//create a file\n$filename = __FILE__ . '.tmp';\n$fp = fopen($filename, 'w+');\nfclose($fp);\n// open file in each access mode and get meta data\nforeach ($filemodes as $mode) {\n    if (strncmp($mode, 'x', 1) == 0) {\n        // x modes require that file does not exist\n        unlink($filename);\n    }\n    $fp = fopen($filename, $mode);\n    var_dump(stream_get_meta_data($fp));\n    fclose($fp);\n}\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
