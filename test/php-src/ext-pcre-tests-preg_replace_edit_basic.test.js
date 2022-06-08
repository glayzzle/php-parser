// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_edit_basic.phpt
  it("Test preg_replace() function : basic", function () {
    expect(parser.parseCode("<?php\n$string = '123456789 - Hello, world -           This is a string.';\nvar_dump($string);\nvar_dump(preg_replace('<- This is a string$>',\n                      'This shouldn\\'t work', $string));\t\t\t\t//tries to find '- This is a string' at the end of a string but can't so replaces nothing and prints the unchanged $string.\nvar_dump(preg_replace('<[0-35-9]>',\n                      '4', $string,               \t\t\t\t\t//finds any number that's not 4 and replaces it with a 4\n                '5', $count));\t\t\t\t\t\t\t//limits to 5 replacements returns 444444789\nvar_dump($count);\t\t\t\t\t\t\t\t\t\t\t//counts the number of replacements made (5)\nvar_dump(preg_replace('<\\b[hH]\\w{2,4}>',\n                      'Bonjour', $string));\t\t\t\t\t\t//finds h or H at the beginning of a word followed by 2-4 characters and replaces it with Bonjour (i.e. Hello -> Bonjour) (was finding the 'his' in This and replacing it)\nvar_dump(preg_replace('<(\\w)\\s*-\\s*(\\w)>',\n                      '\\\\1. \\\\2', $string));\t\t\t\t\t\t//finds dashes with an indefinite amount of whitespace around them and replaces them with a full stop precedeby no spaces and followed by one space\nvar_dump(preg_replace('<(^[a-z]\\w+)@(\\w+)\\.(\\w+)\\.([a-z]{2,}$)>',\n                      '\\\\1 at \\\\2 dot \\\\3 dot \\\\4', 'josmessa@uk.ibm.com'));\t//finds the e-mail address and replaces the @ and . with \"at\" and \"dot\" (uses backreferences) ('josmessa at uk dot ibm dot com')\n?>")).toMatchSnapshot();
  });
});
