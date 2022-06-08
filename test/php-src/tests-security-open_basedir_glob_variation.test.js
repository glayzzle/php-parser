// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_glob_variation.phpt
  it("Test open_basedir configuration for glob", function () {
    expect(parser.parseCode("<?php\n$dir = \"globtest1\";\n$dir2 = \"globtest2\";\nmkdir($dir);\nmkdir($dir2);\nchdir($dir);\nvar_dump(glob(\"../globtest*\"));\n?>")).toMatchSnapshot();
  });
});
