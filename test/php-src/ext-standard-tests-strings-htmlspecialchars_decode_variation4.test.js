// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlspecialchars_decode_variation4.phpt
  it("Test htmlspecialchars_decode() function : usage variations - single quoted strings for 'string' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing htmlspecialchars_decode() with various single quoted strings as argument for $string\n*/\necho \"*** Testing htmlspecialchars_decode() : usage variations ***\\n\";\n//single quoted strings\n$values = array (\n  'Roy&#039s height &gt; Sam&#039;s \\$height... 1111 &ap; 0000 = 0000... &quot; double quote string &quot;',\n  'Roy&#039;s height &gt; Sam&#039;s height... \\t\\t 13 &lt; 15...\\n\\r &quot; double quote\\f\\v string &quot;',\n  '\\nRoy&#039;s height &gt\\t; Sam&#039;s\\v height\\f',\n  '\\r\\tRoy&#039;s height &gt\\r; Sam\\t&#039;s height',\n  '\\n 1\\t3 &\\tgt; 11 but 11 &\\tlt; 12',\n);\n// loop through each element of the values array to check htmlspecialchars_decode() function with all possible arguments\n$iterator = 1;\nforeach($values as $value) {\n      echo \"-- Iteration $iterator --\\n\";\n      var_dump( htmlspecialchars_decode($value) );\n      var_dump( htmlspecialchars_decode($value, ENT_COMPAT) );\n      var_dump( htmlspecialchars_decode($value, ENT_NOQUOTES) );\n      var_dump( htmlspecialchars_decode($value, ENT_QUOTES) );\n      $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
