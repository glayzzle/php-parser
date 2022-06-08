// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filetype_error.phpt
  it("Test filetype() function: Error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\";\n/* non-existing file or dir */\nprint( filetype(\"/no/such/file/dir\") );\n/* unknown type */\nprint( filetype(\"string\") );\nprint( filetype(100) );\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
