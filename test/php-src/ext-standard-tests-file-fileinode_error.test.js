// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileinode_error.phpt
  it("Test fileinode() function: Error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions of fileinode() ***\";\n/* Non-existing file or dir */\nvar_dump( fileinode(\"/no/such/file/dir\") );\n/* Invalid arguments */\nvar_dump( fileinode(\"string\") );\nvar_dump( fileinode(100) );\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
