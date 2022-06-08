// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_fopen.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"fopen\");\nvar_dump(fopen(\"../bad\", \"r\"));\nvar_dump(fopen(\"../bad/bad.txt\", \"r\"));\nvar_dump(fopen(\"..\", \"r\"));\nvar_dump(fopen(\"../\", \"r\"));\nvar_dump(fopen(\"/\", \"r\"));\nvar_dump(fopen(\"../bad/.\", \"r\"));\nvar_dump(fopen(\"../bad/./bad.txt\", \"r\"));\nvar_dump(fopen(\"./../.\", \"r\"));\nvar_dump(fopen($initdir.\"/test/ok/ok.txt\", \"r\"));\nvar_dump(fopen(\"./ok.txt\", \"r\"));\nvar_dump(fopen(\"ok.txt\", \"r\"));\nvar_dump(fopen(\"../ok/ok.txt\", \"r\"));\nvar_dump(fopen(\"../ok/./ok.txt\", \"r\"));\ntest_open_basedir_after(\"fopen\");\n?>")).toMatchSnapshot();
  });
});
