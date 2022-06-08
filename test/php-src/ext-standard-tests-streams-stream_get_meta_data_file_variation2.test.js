// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_file_variation2.phpt
  it("Testing stream_get_meta_data() \"unread_bytes\" field", function () {
    expect(parser.parseCode("<?php\n$filename = __FILE__ . '.tmp';\n$fp = fopen($filename, \"w+\");\necho \"Write some data to the file:\\n\";\n$i = 0;\nwhile ($i++ < 20) {\n    fwrite($fp, \"a line of data\\n\");\n}\nvar_dump(stream_get_meta_data($fp));\n//seek to start of file\nrewind($fp);\necho \"\\n\\nRead a line of the file, causing data to be buffered:\\n\";\nvar_dump(fgets($fp));\nvar_dump(stream_get_meta_data($fp));\necho \"\\n\\nRead 20 bytes from the file:\\n\";\nfread($fp, 20);\nvar_dump(stream_get_meta_data($fp));\necho \"\\n\\nRead entire file:\\n\";\nwhile(!feof($fp)) {\n    fread($fp, 1);\n}\nvar_dump(stream_get_meta_data($fp));\nfclose($fp);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
