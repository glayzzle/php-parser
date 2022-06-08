// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_error_log.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"error_log\");\nvar_dump(ini_set(\"error_log\", $initdir.\"/test/bad/bad.txt\"));\nvar_dump(ini_set(\"error_log\", $initdir.\"/test/bad.txt\"));\nvar_dump(ini_set(\"error_log\", $initdir.\"/bad.txt\"));\nvar_dump(ini_set(\"error_log\", $initdir.\"/test/ok/ok.txt\"));\nvar_dump(ini_set(\"error_log\", $initdir.\"/test/ok/ok.txt\"));\ntest_open_basedir_after(\"error_log\");\n?>")).toMatchSnapshot();
  });
});
