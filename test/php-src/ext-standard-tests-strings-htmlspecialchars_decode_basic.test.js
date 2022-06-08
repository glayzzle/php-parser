// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlspecialchars_decode_basic.phpt
  it("Test htmlspecialchars_decode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing htmlspecialchars_decode() : basic functionality ***\\n\";\n// Initialise arguments\n//value initialized = Roy's height > Sam's height. 13 < 25. 1111 & 0000 = 0000. \"double quoted string\"\n$single_quote_string = \"Roy&#039;s height &gt; Sam&#039;s height. 13 &lt; 25. 1111 &amp; 0000 = 0000. &quot; double quoted string &quot;\";\n$double_quote_string = \"Roy&#039;s height &gt; Sam&#039;s height. 13 &lt; 25. 1111 &amp; 0000 = 0000. &quot; double quoted string &quot;\";\n// Calling htmlspecialchars_decode() with default arguments\nvar_dump( htmlspecialchars_decode($single_quote_string) );\nvar_dump( htmlspecialchars_decode($double_quote_string) );\n// Calling htmlspecialchars_decode() with optional 'quote_style' argument\nvar_dump( htmlspecialchars_decode($single_quote_string, ENT_COMPAT) );\nvar_dump( htmlspecialchars_decode($double_quote_string, ENT_COMPAT) );\nvar_dump( htmlspecialchars_decode($single_quote_string, ENT_NOQUOTES) );\nvar_dump( htmlspecialchars_decode($double_quote_string, ENT_NOQUOTES) );\nvar_dump( htmlspecialchars_decode($single_quote_string, ENT_QUOTES) );\nvar_dump( htmlspecialchars_decode($double_quote_string, ENT_QUOTES) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
