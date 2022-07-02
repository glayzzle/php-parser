// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_file_get_contents.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"file_get_contents\");\ntest_open_basedir_error(\"file_get_contents\");\nvar_dump(file_get_contents(\"ok.txt\"));\nvar_dump(file_get_contents(\"../ok/ok.txt\"));\nvar_dump(file_get_contents($initdir.\"/test/ok/ok.txt\"));\nvar_dump(file_get_contents($initdir.\"/test/ok/../ok/ok.txt\"));\ntest_open_basedir_after(\"file_get_contents\");\n?>")).toMatchSnapshot();
  });
});
