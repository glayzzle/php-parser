// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/003.phpt
  it("is_*() and file_exists() return values are boolean.", function () {
    expect(parser.parseCode("<?php\n$funcs = array(\n    'is_writable',\n    'is_readable',\n    'is_executable',\n    'is_file',\n    'file_exists',\n);\n$filename=\"\";\nforeach ($funcs as $test) {\n    $bb = $test($filename);\n    echo gettype($bb).\"\\n\";\n    clearstatcache();\n}\n$filename=\"run-tests.php\";\nforeach ($funcs as $test) {\n    $bb = $test($filename);\n    echo gettype($bb).\"\\n\";\n    clearstatcache();\n}\n?>")).toMatchSnapshot();
  });
});
