// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_mkdir.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"mkdir\");\nvar_dump(mkdir(\"../bad/blah\"));\nvar_dump(mkdir(\"../blah\"));\nvar_dump(mkdir(\"../bad/./blah\"));\nvar_dump(mkdir(\"./.././blah\"));\nvar_dump(mkdir($initdir.\"/test/ok/blah\"));\nvar_dump(rmdir($initdir.\"/test/ok/blah\"));\ntest_open_basedir_after(\"mkdir\");\n?>")).toMatchSnapshot();
  });
});
