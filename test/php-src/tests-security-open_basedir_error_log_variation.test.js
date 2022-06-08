// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_error_log_variation.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"error_log\");\ndefine(\"DESTINATION_IS_FILE\", 3);\nvar_dump(error_log(\"Hello World!\", DESTINATION_IS_FILE, $initdir.\"/test/bad/bad.txt\"));\nvar_dump(error_log(\"Hello World!\", DESTINATION_IS_FILE, $initdir.\"/test/bad.txt\"));\nvar_dump(error_log(\"Hello World!\", DESTINATION_IS_FILE, $initdir.\"/bad.txt\"));\nvar_dump(error_log(\"Hello World!\", DESTINATION_IS_FILE, $initdir.\"/test/ok/ok.txt\"));\ntest_open_basedir_after(\"error_log\");\n?>")).toMatchSnapshot();
  });
});
