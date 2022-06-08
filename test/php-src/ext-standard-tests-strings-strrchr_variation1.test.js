// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr_variation1.phpt
  it("Test strrchr() function : usage variations - double quoted strings", function () {
    expect(parser.parseCode("<?php\n/* Test strrchr() function by passing various double quoted strings for 'haystack' & 'needle' */\necho \"*** Testing strrchr() function: with various double quoted strings ***\";\n$haystack = \"Hello,\\t\\n\\0\\n  $&!#%\\o,()*+-./:;<=>?@hello123456he \\x234 \\101 \";\n$needle = array(\n  //regular strings\n  \"l\",\n  \"L\",\n  \"HELLO\",\n  \"hEllo\",\n  //escape characters\n  \"\\t\",\n  \"\\T\",\n  \"\t\",\n  \"\\n\",\n  \"\\N\",\n  \"\n\",  //new line\n  //nulls\n  \"\\0\",\n  //boolean false\n  FALSE,\n  false,\n  //empty string\n  \"\",\n  //special chars\n  \" \",\n  \"$\",\n  \" $\",\n  \"&\",\n  \"!#\",\n  \"%\\o\",\n  \"\\o,\",\n  \"()\",\n  \"*+\",\n  \"+\",\n  \"-\",\n  \".\",\n  \".;\",\n  \":;\",\n  \";\",\n  \"<=>\",\n  \">\",\n  \"=>\",\n  \"?\",\n  \"@\",\n  \"@hEllo\",\n  \"12345\", //decimal numeric string\n  \"\\x23\",  //hexadecimal numeric string\n  \"#\",  //respective ASCII char of \\x23\n  \"\\101\",  //octal numeric string\n  \"A\",  //respective ASCII char of \\101\n  \"456HEE\",  //numerics + chars\n  42, //needle as int(ASCII value of \"*\")\n  $haystack  //haystack as needle\n);\n/* loop through to get the position of the needle in haystack string */\n$count = 1;\nfor($index=0; $index<count($needle); $index++) {\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( strrchr($haystack, $needle[$index]) );\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
