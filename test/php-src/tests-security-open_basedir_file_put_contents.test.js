// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_file_put_contents.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"file_put_contents\");\nvar_dump(file_put_contents(\"../bad/bad.txt\", \"Hello World!\"));\nvar_dump(file_put_contents(\".././bad/bad.txt\", \"Hello World!\"));\nvar_dump(file_put_contents(\"../bad/../bad/bad.txt\", \"Hello World!\"));\nvar_dump(file_put_contents(\"./.././bad/bad.txt\", \"Hello World!\"));\nvar_dump(file_put_contents($initdir.\"/test/bad/bad.txt\", \"Hello World!\"));\ntest_open_basedir_after(\"file_put_contents\");\n?>")).toMatchSnapshot();
  });
});
