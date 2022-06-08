// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_is_executable.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"is_executable\");\ntest_open_basedir_error(\"is_executable\");\nvar_dump(is_executable(\"ok.txt\"));\nvar_dump(is_executable(\"../ok/ok.txt\"));\nvar_dump(is_executable($initdir.\"/test/ok/ok.txt\"));\nvar_dump(is_executable($initdir.\"/test/ok/../ok/ok.txt\"));\ntest_open_basedir_after(\"is_executable\");\n?>")).toMatchSnapshot();
  });
});
