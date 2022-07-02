// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_scandir.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"scandir\");\ntest_open_basedir_error(\"scandir\");\nvar_dump(scandir($initdir.\"/test/ok/\"));\nvar_dump(scandir($initdir.\"/test/ok\"));\nvar_dump(scandir($initdir.\"/test/ok/../ok\"));\ntest_open_basedir_after(\"scandir\");?>")).toMatchSnapshot();
  });
});
