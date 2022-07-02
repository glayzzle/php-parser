// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_touch.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"touch\");\nvar_dump(touch(\"../bad\"));\nvar_dump(touch(\"../bad/bad.txt\"));\nvar_dump(touch(\"..\"));\nvar_dump(touch(\"../\"));\nvar_dump(touch(\"/\"));\nvar_dump(touch(\"../bad/.\"));\nvar_dump(touch(\"../bad/./bad.txt\"));\nvar_dump(touch(\"./../.\"));\nvar_dump(touch($initdir.\"/test/ok/ok.txt\"));\nvar_dump(touch(\"./ok.txt\"));\nvar_dump(touch(\"ok.txt\"));\nvar_dump(touch(\"../ok/ok.txt\"));\nvar_dump(touch(\"../ok/./ok.txt\"));\ntest_open_basedir_after(\"touch\");\n?>")).toMatchSnapshot();
  });
});
