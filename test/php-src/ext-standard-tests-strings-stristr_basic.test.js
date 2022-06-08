// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stristr_basic.phpt
  it("Test stristr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stristr() : basic functionality ***\\n\";\nvar_dump( stristr(\"Test string\", \"teSt\") );\nvar_dump( stristr(\"test stRIng\", \"striNG\") );\nvar_dump( stristr(\"teST StrinG\", \"stRIn\") );\nvar_dump( stristr(\"tesT string\", \"t S\") );\nvar_dump( stristr(\"test strinG\", \"g\") );\nvar_dump( bin2hex(stristr(\"te\".chr(0).\"St\", chr(0))) );\nvar_dump( stristr(\"tEst\", \"test\") );\nvar_dump( stristr(\"teSt\", \"test\") );\nvar_dump( stristr(\"Test String\", \"String\", false) );\nvar_dump( stristr(\"Test String\", \"String\", true) );\n?>")).toMatchSnapshot();
  });
});
