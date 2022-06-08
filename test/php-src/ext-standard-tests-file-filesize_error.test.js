// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filesize_error.phpt
  it("Test filesize() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing filesize(): error conditions ***\";\n/* Non-existing file or dir */\nvar_dump( filesize(\"/no/such/file\") );\nvar_dump( filesize(\"/no/such/dir\") );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
