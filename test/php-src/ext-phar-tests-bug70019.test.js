// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug70019.phpt
  it("Bug #70019 Files extracted from archive may be placed outside of destination directory", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__.\"/bug70019\";\n$phar = new PharData(__DIR__.\"/bug70019.zip\");\nif(!is_dir($dir)) {\n  mkdir($dir);\n}\n$phar->extractTo($dir);\nvar_dump(file_exists(\"$dir/ThisIsATestFile.txt\"));\n?>")).toMatchSnapshot();
  });
});
