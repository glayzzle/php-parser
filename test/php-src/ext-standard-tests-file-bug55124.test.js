// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug55124.phpt
  it("Bug #55124 (recursive mkdir fails with current (dot) directory in path)", function () {
    expect(parser.parseCode("<?php\n$old_dir_path = getcwd();\nchdir(__DIR__);\nmkdir('a/./b', 0755, true);\nif (is_dir('a/b')) {\n    rmdir('a/b');\n}\nif (is_dir('./a')) {\n    rmdir('a');\n}\nchdir($old_dir_path);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
