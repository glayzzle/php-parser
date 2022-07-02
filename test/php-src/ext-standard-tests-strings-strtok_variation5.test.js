// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtok_variation5.phpt
  it("Test strtok() function : usage variations - miscellaneous inputs", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing strtok() : with miscellaneous combinations of string and token\n*/\necho \"*** Testing strtok() : with miscellaneous inputs ***\\n\";\n// defining arrays for input strings and tokens\n$string_array = array(\n               \"HELLO WORLD\",\n               \"hello world\",\n               \"_HELLO_WORLD_\",\n               \"/thello/t/wor/ttld\",\n               \"hel/lo/t/world\",\n                       \"one:$:two:!:three:#:four\",\n               \"\\rhello/r/wor\\rrld\",\n                   chr(0),\n                       chr(0).chr(0),\n                       chr(0).'hello'.chr(0),\n                       'hello'.chr(0).'world'\n             );\n$token_array = array(\n              \"wr\",\n              \"hello world\",\n              \"__\",\n                      \"t/\",\n              '/t',\n              \":\",\n              \"\\r\",\n              \"\\0\",\n              \"\\0\",\n              \"\\0\",\n              \"\\0\",\n            );\n// loop through each element of the array and check the working of strtok()\n// when supplied with different string and token values\n$counter =1;\nforeach( $string_array as $string )  {\n  echo \"\\n--- Iteration $counter ---\\n\";\n  var_dump( strtok($string, $token_array[$counter-1]) );\n  for( $count = 1; $count <=5; $count++ )  {\n    var_dump( strtok($token_array[$counter-1]) );\n  }\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
