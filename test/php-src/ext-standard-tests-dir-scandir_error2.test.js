// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_error2.phpt
  it("Test scandir() function : error conditions - Non-existent directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a directory that does not exist to scandir() to test error messages\n */\necho \"*** Testing scandir() : error conditions ***\\n\";\n$directory = __DIR__ . '/idonotexist';\necho \"\\n-- Pass scandir() an absolute path that does not exist --\\n\";\nvar_dump(scandir($directory));\necho \"\\n-- Pass scandir() a relative path that does not exist --\\n\";\nvar_dump(scandir('/idonotexist'));\n?>")).toMatchSnapshot();
  });
});
