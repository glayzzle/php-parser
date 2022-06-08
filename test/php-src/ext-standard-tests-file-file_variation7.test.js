// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_variation7.phpt
  it("file() on a file with blank lines", function () {
    expect(parser.parseCode("<?php\n$filepath = __FILE__ . \".tmp\";\n$fd = fopen($filepath, \"w+\");\nfwrite($fd, \"Line 1\\n\\n \\n  \\n\\Line 3\");\nfclose($fd);\necho \"file():\\n\";\nvar_dump(file($filepath));\necho \"\\nfile() with FILE_IGNORE_NEW_LINES:\\n\";\nvar_dump(file($filepath, FILE_IGNORE_NEW_LINES));\necho \"\\nfile() with FILE_SKIP_EMPTY_LINES:\\n\";\nvar_dump(file($filepath, FILE_SKIP_EMPTY_LINES));\necho \"\\nfile() with FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES:\\n\";\nvar_dump(file($filepath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES));\nunlink($filepath);\n?>")).toMatchSnapshot();
  });
});
