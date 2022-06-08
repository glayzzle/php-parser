// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/chdir_error2.phpt
  it("Test chdir() function : error conditions - Non-existent directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a directory that does not exist as $directory to chdir() to test behaviour\n */\necho \"*** Testing chdir() : error conditions ***\\n\";\n$directory = __FILE__ . '/idonotexist';\nvar_dump(chdir($directory));\n?>")).toMatchSnapshot();
  });
});
