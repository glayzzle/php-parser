// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_rename.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"rename\");\nvar_dump(rename(\"../bad/bad.txt\", \"rename.txt\"));\nvar_dump(rename(\".././bad/bad.txt\", \"rename.txt\"));\nvar_dump(rename(\"../bad/../bad/bad.txt\", \"rename.txt\"));\nvar_dump(rename(\"./.././bad/bad.txt\", \"rename.txt\"));\nvar_dump(rename($initdir.\"/test/bad/bad.txt\", \"rename.txt\"));\ntest_open_basedir_after(\"rename\");\n?>")).toMatchSnapshot();
  });
});
