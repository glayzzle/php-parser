// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/opendir_error2.phpt
  it("Test opendir() function : error conditions - Non-existent directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a non-existent directory as $path argument to opendir() to test behaviour\n */\necho \"*** Testing opendir() : error conditions ***\\n\";\necho \"\\n-- Pass a non-existent absolute path: --\\n\";\n$path = __DIR__ . \"/idonotexist\";\nvar_dump(opendir($path));\necho \"\\n-- Pass a non-existent relative path: --\\n\";\nchdir(__DIR__);\nvar_dump(opendir('idonotexist'));\n?>")).toMatchSnapshot();
  });
});
