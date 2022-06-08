// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/in_array_variation2.phpt
  it("Test in_array() function : usage variations - different haystack values", function () {
    expect(parser.parseCode("<?php\n/* Test in_array() with different possible haystack values */\necho \"*** Testing in_array() with different haystack values ***\\n\";\n$misc_array = array (\n  'a',\n  'key' =>'d',\n  3,\n  \".001\" =>-67,\n  \"-.051\" =>\"k\",\n  0 =>\"-.08\",\n  \"e\" =>\"5\",\n  \"y\" =>NULL,\n  NULL =>\"\",\n  0,\n  TRUE,\n  FALSE,\n  -27.39999999999,\n  \" \",\n  \"abcd\\x00abcd\\x00\\abcd\\x00abcdefghij\",\n  \"abcd\\nabcd\\tabcd\\rabcd\\0abcd\"\n);\n$array_type = array(TRUE, FALSE, 1, 0, -1, \"1\", \"0\", \"-1\", NULL, array(), \"PHP\", \"\");\n/* loop to do loose and strict type check of elements in\n   $array_type on elements in $misc_array using in_array();\n   checking PHP type comparison tables\n*/\n$counter = 1;\nforeach($array_type as $type) {\n  echo \"-- Iteration $counter --\\n\";\n  //loose type checking\n  var_dump( in_array($type,$misc_array ) );\n  //strict type checking\n  var_dump( in_array($type,$misc_array,true) );\n  //loose type checking\n  var_dump( in_array($type,$misc_array,false) );\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
