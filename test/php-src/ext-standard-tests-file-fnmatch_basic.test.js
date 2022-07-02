// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fnmatch_basic.phpt
  it("Test fnmatch() function: Basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fnmatch() with file ***\\n\";\n$file = basename(__FILE__);\nvar_dump( fnmatch(\"*.php\", $file) );\nvar_dump( fnmatch(\"*.p*p\", $file) );\nvar_dump( fnmatch(\"*.p*\", $file) );\nvar_dump( fnmatch(\"*\", $file) );\nvar_dump( fnmatch(\"**\", $file) );\nvar_dump( fnmatch(\"*.phpt\", $file) );\necho \"*** Testing fnmatch() with other than file ***\\n\";\nvar_dump( fnmatch(100, 100) );\nvar_dump( fnmatch(\"string\", \"string\") );\nvar_dump( fnmatch(TRUE, TRUE) );\nvar_dump( fnmatch(FALSE, FALSE) );\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
