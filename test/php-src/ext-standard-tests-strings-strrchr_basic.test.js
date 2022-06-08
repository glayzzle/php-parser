// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_basic.phpt
  it("Test strrchr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strrchr() function: basic functionality ***\\n\";\nvar_dump( strrchr(\"Hello, World\", \"H\") ); //needle as single char\nvar_dump( strrchr(\"Hello, World\", \"Hello\") ); //needle as a first word of haystack\nvar_dump( strrchr('Hello, World', 'H') );\nvar_dump( strrchr('Hello, World', 'Hello') );\n//considering case\nvar_dump( strrchr(\"Hello, World\", \"h\") );\nvar_dump( strrchr(\"Hello, World\", \"hello\") );\n//needle as second word of haystack\nvar_dump( strrchr(\"Hello, World\", \"World\") );\nvar_dump( strrchr('Hello, World', 'World') );\n//needle as special char\nvar_dump( strrchr(\"Hello, World\", \",\") );\nvar_dump( strrchr('Hello, World', ',') );\nvar_dump( strrchr(\"Hello, World\", \"Hello, World\") ); //needle as haystack\n//needle string containing one existing and one non-existing char\nvar_dump( strrchr(\"Hello, World\", \"Hi\") );\n//multiple existence of needle in haystack\nvar_dump( strrchr(\"Hello, World\", \"o\") );\nvar_dump( strrchr(\"Hello, World\", \"ooo\") );\nvar_dump( strrchr(\"Hello, World\", \"Zzzz\") ); //non-existent needle in haystack\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
