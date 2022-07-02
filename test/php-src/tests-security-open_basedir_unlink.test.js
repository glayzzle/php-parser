// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_unlink.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"unlink\");\nvar_dump(unlink(\"../bad/bad.txt\"));\nvar_dump(unlink(\".././bad/bad.txt\"));\nvar_dump(unlink(\"../bad/../bad/bad.txt\"));\nvar_dump(unlink(\"./.././bad/bad.txt\"));\nvar_dump(unlink($initdir.\"/test/bad/bad.txt\"));\ntest_open_basedir_after(\"unlink\");\n?>")).toMatchSnapshot();
  });
});
