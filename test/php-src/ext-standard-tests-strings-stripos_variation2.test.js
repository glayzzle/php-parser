// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_variation2.phpt
  it("Test stripos() function : usage variations - single quoted strings for 'haystack' & 'needle' arguments", function () {
    expect(parser.parseCode("<?php\n/* Test stripos() function by passing single quoted strings to 'haystack' & 'needle' arguments */\necho \"*** Testing stripos() function: with single quoted strings ***\\n\";\n$haystack = 'Hello,\\t\\n\\0\\n  $&!#%\\o,()*+-./:;<=>?@hello123456he \\x234 \\101 ';\n$needle = array(\n  //regular strings\n  'l',\n  'L',\n  'HELLO',\n  'hEllo',\n  //escape characters\n  '\\t',\n  '\\T',\n  '     ',\n  '\\n',\n  '\\N',\n  '\n',  //new line\n  //nulls\n  '\\0',\n  //boolean false\n  FALSE,\n  false,\n  //empty string\n  '',\n  //special chars\n  ' ',\n  '$',\n  ' $',\n  '&',\n  '!#',\n  '%\\o',\n  '\\o,',\n  '()',\n  '*+',\n  '+',\n  '-',\n  '.',\n  '.;',\n  '.;',\n  ':;',\n  ';',\n  '<=>',\n  '>',\n  '=>',\n  '?',\n  '@',\n  '@hEllo',\n  '12345', //decimal numeric string\n  '\\x23',  //hexadecimal numeric string\n  '#',  //hexadecimal numeric string\n  '\\101',  //octal numeric string\n  'A',\n  '456HEE',  //numerics + chars\n  42, //needle as int(ASCII value of '*')\n  $haystack  //haystack as needle\n);\n/* loop through to get the position of the needle in haystack string */\n$count = 1;\nfor($index=0; $index<count($needle); $index++) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( stripos($haystack, $needle[$index]) );\n  var_dump( stripos($haystack, $needle[$index], $index) );\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
