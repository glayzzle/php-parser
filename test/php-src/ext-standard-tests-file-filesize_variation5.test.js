// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filesize_variation5.phpt
  it("Test filesize() function: usage variations - size of files", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing filesize(): usage variations ***\\n\";\n/* null, false, \"\", \" \" */\nvar_dump( filesize(false) );\nvar_dump( filesize('') );\nvar_dump( filesize(' ') );\nvar_dump( filesize('|') );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
