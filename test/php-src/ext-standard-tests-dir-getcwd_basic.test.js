// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/getcwd_basic.phpt
  it("Test getcwd() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of getcwd()\n */\necho \"*** Testing getcwd() : basic functionality ***\\n\";\n//create temporary directory for test, removed in CLEAN section\n$directory = __DIR__ . \"/getcwd_basic\";\nmkdir($directory);\nvar_dump(getcwd());\nchdir($directory);\nvar_dump(getcwd());\n?>")).toMatchSnapshot();
  });
});
