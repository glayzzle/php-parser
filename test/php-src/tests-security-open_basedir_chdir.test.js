// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_chdir.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\ntest_open_basedir_before(\"chdir\");\nvar_dump(chdir(\"../bad\"));\nvar_dump(chdir(\"..\"));\nvar_dump(chdir(\"../\"));\nvar_dump(chdir(\"/\"));\nvar_dump(chdir(\"../bad/.\"));\nvar_dump(chdir(\"./../.\"));\ntest_open_basedir_after(\"chdir\");\n?>")).toMatchSnapshot();
  });
});
