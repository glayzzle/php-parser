// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrev_basic.phpt
  it("Test strrev() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strrev() : basic functionality ***\\n\";\n$heredoc = <<<EOD\nHello, world\nEOD;\n//regular string\nvar_dump( strrev(\"Hello, World\") );\nvar_dump( strrev('Hello, World') );\n//single character\nvar_dump( strrev(\"H\") );\nvar_dump( strrev('H') );\n//string containing simalr chars\nvar_dump( strrev(\"HHHHHH\") );\nvar_dump( strrev(\"HhhhhH\") );\n//string containing escape char\nvar_dump( strrev(\"Hello, World\\n\") );\nvar_dump( strrev('Hello, World\\n') );\n//heredoc string\nvar_dump( strrev($heredoc) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
