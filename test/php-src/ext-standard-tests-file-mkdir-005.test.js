// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir-005.phpt
  it("recursive mkdir() tests", function () {
    expect(parser.parseCode("<?php\nchdir(\"/\");\nvar_dump(mkdir(\"./testdir/subdir\", 0777, true));\nvar_dump(rmdir(\"./testdir/subdir\"));\nvar_dump(rmdir(\"./testdir\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
