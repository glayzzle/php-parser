// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug39538.phpt
  it("Bug #39538 (fgetcsv can't handle starting newlines and trailing odd number of backslashes)", function () {
    expect(parser.parseCode("<?php\n$content = array(\"\\\"\\nthis is an test\\\", \\\"next data\\\", \\\"p\\narsed\\\"\",\"\\\"\\r\\nthis is an test\\\", \\\"next data\\\", \\\"p\\r\\narsed\\\"\",\"\\\"\\n\\rthis is an test\\\", \\\"next data\\\", \\\"p\\n\\rarsed\\\"\");\n$file = __DIR__ . \"/bug39538.csv\";\n@unlink($file);\nforeach ($content as $v) {\n    file_put_contents($file, $v);\n    print_r (fgetcsv(fopen($file, \"r\"), filesize($file)));\n}\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
