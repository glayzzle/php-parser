// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_disk_free_space.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"disk_free_space\");\ntest_open_basedir_error(\"disk_free_space\");\nvar_dump(disk_free_space($initdir.\"/test/ok\"));\ntest_open_basedir_after(\"disk_free_space\");\n?>")).toMatchSnapshot();
  });
});
