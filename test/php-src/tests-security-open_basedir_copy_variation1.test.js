// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_copy_variation1.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\ntest_open_basedir_before(\"copy\");\nvar_dump(copy(\"../bad/bad.txt\", \"copy.txt\"));\nvar_dump(unlink(\"copy.txt\"));\ntest_open_basedir_after(\"copy\");\n?>")).toMatchSnapshot();
  });
});
