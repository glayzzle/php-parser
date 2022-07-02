// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir_rmdir_error.phpt
  it("Test mkdir() and rmdir() functions : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing rmdir() on non-existent directory ***\\n\";\nvar_dump( rmdir(\"temp\") );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
