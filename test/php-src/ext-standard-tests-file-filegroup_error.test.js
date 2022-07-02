// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filegroup_error.phpt
  it("Test filegroup() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing filegroup(): error conditions ***\\n\";\n/* Non-existing file or dir */\nvar_dump( filegroup(\"/no/such/file/dir\") );\n/* Invalid arguments */\nvar_dump( filegroup(\"string\") );\nvar_dump( filegroup(100) );\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
