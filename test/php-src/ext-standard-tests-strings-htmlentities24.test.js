// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities24.phpt
  it("Test htmlentities() function", function () {
    expect(parser.parseCode("<?php\n/* Prototype: string htmlentities ( string $string [, int $quote_style [, string $charset]] );\n   Description: Convert all applicable characters to HTML entities\n*/\n/* retrieving htmlentities from the ANSI character table */\necho \"*** Retrieving htmlentities for 256 characters ***\\n\";\nfor($i=0; $i<256; $i++)\n  var_dump( bin2hex( htmlentities(\"chr($i)\")) );\n/* giving arguments as NULL */\necho \"\\n*** Testing htmlentities() with NULL as first,second and third argument ***\\n\";\nvar_dump( htmlentities(\"\\x82\\x86\\x99\\x9f\\x80\\x82\\x81\", ENT_QUOTES, NULL) ); /* UTF-8 assumed */\nvar_dump( htmlentities(\"\\x82\\x86\\x99\\x9f\\x80\\x82\\x81\", ENT_NOQUOTES, NULL) ); /* UTF-8 assumed */\nvar_dump( htmlentities(\"\\x82\\x86\\x99\\x9f\\x80\\x82\\x81\", ENT_COMPAT, NULL) ); /* UTF-8 assumed */\n/* giving long string to check for proper memory re-allocation */\necho \"\\n*** Checking for proper memory allocation with long string ***\\n\";\nvar_dump( htmlentities(\"\\x82\\x86\\x99\\x9f\\x80\\x82\\x86\\x84\\x80\\x89\\x85\\x83\\x86\\x84\\x80\\x91\\x83\\x91\\x86\\x87\\x85\\x86\\x88\\x82\\x89\\x92\\x91\\x83\", ENT_QUOTES, 'cp1252'));\n/* giving a normal string */\necho \"\\n*** Testing a normal string with htmlentities() ***\\n\";\nvar_dump( htmlentities(\"<html> This is a test! </html>\") );\n/* checking behavior of quote */\necho \"\\n*** Testing htmlentites() on a quote ***\\n\";\n$str = \"A 'quote' is <b>bold</b>\";\nvar_dump( htmlentities($str) );\nvar_dump( htmlentities($str, ENT_QUOTES) );\nvar_dump( htmlentities($str, ENT_NOQUOTES) );\nvar_dump( htmlentities($str, ENT_COMPAT) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
