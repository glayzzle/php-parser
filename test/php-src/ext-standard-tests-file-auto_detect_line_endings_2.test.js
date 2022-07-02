// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/auto_detect_line_endings_2.phpt
  it("ini_set auto_detect_line_endings bool", function () {
    expect(parser.parseCode("<?php\nini_set(\"auto_detect_line_endings\", \"on\");\nvar_dump(ini_get(\"auto_detect_line_endings\"));\n$filePath = __DIR__ . DIRECTORY_SEPARATOR . \"auto_detect_line_endings_2.txt\";\nfile_put_contents($filePath, \"fooBar1\\rfooBar2\\rfooBar3\");\n$stdin = fopen($filePath, \"r\");\nvar_dump(fgets($stdin));\nvar_dump(fgets($stdin));\nvar_dump(fgets($stdin));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
