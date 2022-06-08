// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_opendir.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"opendir\");\ntest_open_basedir_error(\"opendir\");\nvar_dump(opendir($initdir.\"/test/ok/\"));\nvar_dump(opendir($initdir.\"/test/ok\"));\nvar_dump(opendir($initdir.\"/test/ok/../ok\"));\ntest_open_basedir_after(\"opendir\");?>")).toMatchSnapshot();
  });
});
