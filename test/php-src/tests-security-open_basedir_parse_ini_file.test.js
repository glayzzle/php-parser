// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_parse_ini_file.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\ntest_open_basedir_before(\"parse_ini_file\");\n$directory = __DIR__;\nvar_dump(parse_ini_file(\"../bad\"));\nvar_dump(parse_ini_file(\"../bad/bad.txt\"));\nvar_dump(parse_ini_file(\"..\"));\nvar_dump(parse_ini_file(\"../\"));\nvar_dump(parse_ini_file(\"../bad/.\"));\nvar_dump(parse_ini_file(\"../bad/./bad.txt\"));\nvar_dump(parse_ini_file(\"./../.\"));\ntest_open_basedir_after(\"parse_ini_file\");\n?>")).toMatchSnapshot();
  });
});
