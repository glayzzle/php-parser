// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/dir_bug73971.phpt
  it("Bug #73971 Filename got limited to MAX_PATH on Win32 when scan directory", function () {
    expect(parser.parseCode("<?php\n$base = __DIR__ . DIRECTORY_SEPARATOR . \"bug73971\";\n$filename =  $base . DIRECTORY_SEPARATOR . str_repeat('テスト', 48); // 144 glyph here, less than 256\nmkdir($base);\nmkdir($filename); // created correctly\nvar_dump(basename($filename)); // 432 bytes here, more than 256\necho \"\\ntest dir()\\n\";\n$d = dir($base);\nwhile (false !== ($entry = $d->read())) {\n    var_dump($entry);\n}\n$d->close();\necho \"\\ntest DirectoryIterator\\n\";\n$dir = new DirectoryIterator($base);\nforeach ($dir as $finfo) {\n    var_dump($finfo->getFilename());\n}\n?>")).toMatchSnapshot();
  });
});
