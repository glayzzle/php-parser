// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug65701.phpt
  it("Test for bug #65701: copy() doesn't work when destination filename is created by tempnam()", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__ . \"/bug65701/\";\nif (!is_dir($file_path)) {\n    mkdir($file_path);\n}\n$src = $file_path . '/srcbug65701_file.txt';\n$dst = tempnam($file_path, 'dstbug65701_file.txt');\nfile_put_contents($src, \"Hello World\");\ncopy($src, $dst);\nvar_dump(filesize($dst));\n?>")).toMatchSnapshot();
  });
});
