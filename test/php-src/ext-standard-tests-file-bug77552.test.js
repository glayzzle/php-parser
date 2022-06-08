// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug77552.phpt
  it("Bug #77552 Uninitialized php_stream_statbuf in stat functions", function () {
    expect(parser.parseCode("<?php\n// Check lstat on a Windows junction to ensure that st_mode is zero\n$tmpDir = __DIR__.'/test-bug77552';\n$target = $tmpDir.'/folder/target';\nmkdir($target, 0777, true);\n$junction = $tmpDir.'/junction';\n$cmd = sprintf('mklink /J \"%s\" \"%s\"', $junction, $target);\nexec($cmd);\n$stat = lstat($junction);\nvar_dump($stat['mode']);\n?>")).toMatchSnapshot();
  });
});
