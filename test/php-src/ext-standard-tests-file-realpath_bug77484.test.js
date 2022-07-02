// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/realpath_bug77484.phpt
  it("Bug #77484 Zend engine crashes when calling realpath in invalid working dir", function () {
    expect(parser.parseCode("<?php\n$old_cwd = getcwd();\nmkdir(__DIR__ . \"/foo\");\nchdir(__DIR__ . \"/foo\");\nrmdir(__DIR__ . \"/foo\");\n// Outputs: / (incorrect)\n$new_cwd = getcwd();\n// Outputs: false (correct)\n$rp0 = realpath('');\n// Crash\n$rp1 = realpath('.');\n$rp2 = realpath('./');\nvar_dump($old_cwd, $new_cwd, $rp0, $rp1, $rp2);\n?>")).toMatchSnapshot();
  });
});
