// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_fileinode.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\ntest_open_basedir(\"fileinode\");\n?>")).toMatchSnapshot();
  });
});
