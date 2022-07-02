// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_copy.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\ntest_open_basedir_before(\"copy\");\nvar_dump(copy(\"ok.txt\", \"../bad\"));\nvar_dump(copy(\"ok.txt\", \"../bad/bad.txt\"));\nvar_dump(copy(\"ok.txt\", \"..\"));\nvar_dump(copy(\"ok.txt\", \"../\"));\nvar_dump(copy(\"ok.txt\", \"/\"));\nvar_dump(copy(\"ok.txt\", \"../bad/.\"));\nvar_dump(copy(\"ok.txt\", \"../bad/./bad.txt\"));\nvar_dump(copy(\"ok.txt\", \"./../.\"));\nvar_dump(copy(\"ok.txt\", \"copy.txt\"));\nvar_dump(unlink(\"copy.txt\"));\ntest_open_basedir_after(\"copy\");\n?>")).toMatchSnapshot();
  });
});
