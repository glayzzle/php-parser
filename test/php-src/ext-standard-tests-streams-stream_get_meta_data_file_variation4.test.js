// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_file_variation4.phpt
  it("stream_get_meta_data() with a relative file path", function () {
    expect(parser.parseCode("<?php\necho \"Create a file:\\n\";\n$filename = __FILE__ . '.tmp';\n$fp = fopen('File://' . $filename, 'w+');\nvar_dump(stream_get_meta_data($fp));\nfclose($fp);\necho \"\\nChange to file's directory and open with a relative path:\\n\";\n$dirname = dirname($filename);\nchdir($dirname);\n$relative_filename = basename($filename);\n$fp = fopen($relative_filename, 'r');\nvar_dump(stream_get_meta_data($fp));\nfclose($fp);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
