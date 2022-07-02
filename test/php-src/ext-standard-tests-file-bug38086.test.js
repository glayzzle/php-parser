// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug38086.phpt
  it("Bug #38086 (stream_copy_to_stream() returns 0 when maxlen is bigger than the actual length)", function () {
    expect(parser.parseCode("<?php\ndefine('WIN', substr(PHP_OS, 0, 3) == 'WIN');\n$initial_file = __DIR__.'/bug38086.txt';\n$new_file = __DIR__.'/bug38086_1.txt';\n$src = fopen($initial_file, 'r');\nstream_filter_append($src, \"string.rot13\", STREAM_FILTER_READ);\n$dest = fopen($new_file, 'w');\nvar_dump(stream_copy_to_stream($src, $dest));\nfclose($src); fclose($dest);\nif (WIN) {\n  var_dump(str_replace(\"\\r\\n\",\"\\n\", file_get_contents($new_file)));\n} else {\n  var_dump(file_get_contents($new_file));\n}\nunlink($new_file);\n$src = fopen($initial_file, 'r');\nstream_filter_append($src, \"string.rot13\", STREAM_FILTER_READ);\n$dest = fopen($new_file, 'w');\nvar_dump(stream_copy_to_stream($src, $dest, 10000));\nfclose($src); fclose($dest);\nif (WIN) {\n  var_dump(str_replace(\"\\r\\n\",\"\\n\", file_get_contents($new_file)));\n} else {\n  var_dump(file_get_contents($new_file));\n}\nunlink($new_file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
