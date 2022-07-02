// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_dir.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"dir\");\ntest_open_basedir_error(\"dir\");\nvar_dump(dir($initdir.\"/test/ok/\"));\nvar_dump(dir($initdir.\"/test/ok\"));\nvar_dump(dir($initdir.\"/test/ok/../ok\"));\ntest_open_basedir_after(\"dir\");?>")).toMatchSnapshot();
  });
});
