// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_rmdir.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"rmdir\");\nvar_dump(rmdir(\"../bad\"));\nvar_dump(rmdir(\".././bad\"));\nvar_dump(rmdir(\"../bad/../bad\"));\nvar_dump(rmdir(\"./.././bad\"));\nvar_dump(rmdir($initdir.\"/test/bad\"));\ntest_open_basedir_after(\"rmdir\");\n?>")).toMatchSnapshot();
  });
});
