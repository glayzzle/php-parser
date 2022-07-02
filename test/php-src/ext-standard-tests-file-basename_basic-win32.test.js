// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/basename_basic-win32.phpt
  it("basename() basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_paths = array (\n  /* simple paths (forward slashes) */\n  \"bar\",\n  \"/foo/bar\",\n  \"foo/bar\",\n  \"/bar\",\n  /* simple paths with trailing slashes (forward slashes) */\n  \"bar/\",\n  \"/bar/\",\n  \"/foo/bar/\",\n  \"foo/bar/\",\n  \"/bar/\",\n  /* simple paths (backslashes) */\n  \"bar\",\n  \"\\\\foo\\\\bar\",\n  \"foo\\\\bar\",\n  \"\\\\bar\",\n  /* simple paths with trailing slashes (backslashes) */\n  \"bar\\\\\",\n  \"\\\\bar\\\\\",\n  \"\\\\foo\\\\bar\\\\\",\n  \"foo\\\\bar\\\\\",\n  \"\\\\bar\\\\\",\n  /* paths with numeric strings */\n  \"10.5\\\\10.5\",\n  \"10.5/10.5\",\n  \"10.5\",\n  \"105\",\n  \"/10.5\",\n  \"\\\\10.5\",\n  \"10.5/\",\n  \"10.5\\\\\",\n  \"10/10.zip\",\n  \"0\",\n  '0',\n  /* path with spaces */\n  \" \",\n  ' ',\n  /* empty paths */\n  \"\",\n  '',\n);\nforeach ($file_paths as $file_path) {\n    var_dump(basename($file_path));\n}\n?>")).toMatchSnapshot();
  });
});
