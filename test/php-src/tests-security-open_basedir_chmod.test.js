// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_chmod.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"chmod\");\nvar_dump(chmod(\"../bad\", 0600));\nvar_dump(chmod(\"../bad/bad.txt\", 0600));\nvar_dump(chmod(\"..\", 0600));\nvar_dump(chmod(\"../\", 0600));\nvar_dump(chmod(\"/\", 0600));\nvar_dump(chmod(\"../bad/.\", 0600));\nvar_dump(chmod(\"../bad/./bad.txt\", 0600));\nvar_dump(chmod(\"./../.\", 0600));\nvar_dump(chmod($initdir.\"/test/ok/ok.txt\", 0600));\nvar_dump(chmod(\"./ok.txt\", 0600));\nvar_dump(chmod(\"ok.txt\", 0600));\nvar_dump(chmod(\"../ok/ok.txt\", 0600));\nvar_dump(chmod(\"../ok/./ok.txt\", 0600));\nchmod($initdir.\"/test/ok/ok.txt\", 0777);\ntest_open_basedir_after(\"chmod\");\n?>")).toMatchSnapshot();
  });
});
