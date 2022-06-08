// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug41815.phpt
  it("Bug #41815 (Concurrent read/write fails when EOF is reached)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/concur_rw.txt\";\n@unlink($filename);\n$writer = fopen($filename, \"wt\");\n$reader = fopen($filename, \"r\");\nfread($reader, 1);\nfwrite($writer, \"foo\");\nif (strlen(fread($reader, 10)) > 0) {\n    echo \"OK\\n\";\n}\nfclose($writer);\nfclose($reader);\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
