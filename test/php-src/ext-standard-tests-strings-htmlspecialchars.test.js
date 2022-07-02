// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlspecialchars.phpt
  it("Test htmlspecialchars() function", function () {
    expect(parser.parseCode("<?php\n/* retrieving htmlspecialchars from the ANSI character table */\necho \"*** Retrieving htmlspecialchars for 256 characters ***\\n\";\nfor($i=0; $i<256; $i++)\nvar_dump( bin2hex( htmlspecialchars(\"chr($i)\") ) );\n/* giving NULL as the argument */\necho \"\\n*** Testing htmlspecialchars() with NULL as first, second and third argument ***\\n\";\nvar_dump( htmlspecialchars(\"<br>\", ENT_NOQUOTES, NULL) );\nvar_dump( htmlspecialchars(\"<br>\", ENT_QUOTES, NULL) );\nvar_dump( htmlspecialchars(\"<br>\", ENT_COMPAT, NULL) );\n/* giving long string to check for proper memory re-allocation */\necho \"\\n*** Checking a long string for proper memory allocation ***\\n\";\nvar_dump( htmlspecialchars(\"<br>Testing<p>New file.</p><p><br>File <b><i><u>WORKS!!!</i></u></b></p><br><p>End of file!!!</p>\", ENT_QUOTES, 'iso-8859-1' ) );\n/* Giving a normal string */\necho \"\\n*** Testing a normal string with htmlspecialchars() ***\\n\";\nvar_dump( htmlspecialchars(\"<br>Testing<p>New file.</p> \", ENT_QUOTES, 'iso-8859-1' ) );\n/* checking behavior of quote */\necho \"\\n*** Testing htmlspecialchars() on a quote...\\n\";\n$str = \"A 'quote' is <b>bold</b>\";\nvar_dump( htmlspecialchars($str) );\nvar_dump( htmlspecialchars($str, ENT_QUOTES) );\nvar_dump( htmlspecialchars($str, ENT_NOQUOTES) );\nvar_dump( htmlspecialchars($str, ENT_COMPAT) );\necho \"Done\\n\"\n?>")).toMatchSnapshot();
  });
});
