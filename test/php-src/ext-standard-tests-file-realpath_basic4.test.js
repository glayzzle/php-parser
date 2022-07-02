// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/realpath_basic4.phpt
  it("Test realpath() with relative paths", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n@mkdir(\"$file_path/realpath_basic4/home/test\", 0777, true);\n@symlink(\"$file_path/realpath_basic4/home\", \"$file_path/realpath_basic4/link1\");\n@symlink(\"$file_path/realpath_basic4/link1\", \"$file_path/realpath_basic4/link2\");\necho \"1. \" . realpath(\"$file_path/realpath_basic4/link2\") . \"\\n\";\necho \"2. \" . realpath(\"$file_path/realpath_basic4/link2/test\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
