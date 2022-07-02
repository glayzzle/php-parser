// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileowner_error.phpt
  it("Test of fileowner() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fileowner(): error conditions ***\\n\";\n/* Non-existing file or dir */\nvar_dump( fileowner(\"/no/such/file/dir\") );\n/* Invalid arguments */\nvar_dump( fileowner(\"string\") );\nvar_dump( fileowner(100) );\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
