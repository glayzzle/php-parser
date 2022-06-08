// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug68335.phpt
  it("Bug #68335: rmdir doesn't work with file:// stream wrapper", function () {
    expect(parser.parseCode("<?php\n$dir = 'file://' . __DIR__ . '/testDir';\nmkdir($dir);\nvar_dump(is_dir($dir));\nrmdir($dir);\nvar_dump(is_dir($dir));\n?>")).toMatchSnapshot();
  });
});
