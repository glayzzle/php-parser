// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_file_variation5.phpt
  it("testing stream_get_meta_data() \"eof\" field for a file stream", function () {
    expect(parser.parseCode("<?php\n$filename = __FILE__ . '.tmp';\n$fp = fopen($filename, \"w+\");\necho \"Write some data to the file:\\n\";\n$i = 0;\nwhile ($i++ < 20) {\n    fwrite($fp, \"a line of data\\n\");\n}\nvar_dump(stream_get_meta_data($fp));\n//seek to start of file\nrewind($fp);\necho \"\\n\\nRead entire file:\\n\";\nwhile(!feof($fp)) {\n    fread($fp, 1);\n}\nvar_dump(stream_get_meta_data($fp));\nfclose($fp);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
