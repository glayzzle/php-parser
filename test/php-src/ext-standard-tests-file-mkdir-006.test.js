// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir-006.phpt
  it("recursive mkdir() with unclean paths", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\n$dirpath = \"./tmp/foo//bar/logs\";\nmkdir($dirpath, 0777, true);\nif (is_dir($dirpath)) {\n    echo \"Ok.\\n\";\n} else {\n    echo \"Failed.\\n\";\n}\nrmdir(\"./tmp/foo/bar/logs\");\nrmdir(\"./tmp/foo/bar/\");\nrmdir(\"./tmp/foo/\");\nrmdir(\"./tmp/\");\n?>")).toMatchSnapshot();
  });
});
