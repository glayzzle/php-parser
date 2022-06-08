// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtok_variation6.phpt
  it("Test strtok() function : usage variations - invalid escape sequences as tokens", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing strtok() : with invalid escape sequences in token\n*/\necho \"*** Testing strtok() : with invalid escape sequences in token ***\\n\";\n// defining arrays for input strings and tokens\n$string_array = array(\n               \"khellok worldk\",\n               \"\\khello\\k world\\k\",\n               \"/khello\\k world/k\",\n               \"/hellok/ world\"\n             );\n$token_array = array(\n               \"k\",\n               \"/ \",\n               \"/k\",\n               \"\\k\",\n               \"\\\\\\\\\\\\\\k\\h\\\\e\\l\\o\\w\\r\\l\\d\"\n            );\n// loop through each element of the array and check the working of strtok()\n// when supplied with different string and token values\n$counter =1;\nforeach( $string_array as $string )  {\n  echo \"\\n--- Iteration $counter ---\\n\";\n  foreach( $token_array as $token )  {\n    var_dump( strtok($string, $token) );\n    for( $count = 1; $count <=3; $count++ )  {\n      var_dump( strtok($token) );\n    }\n    echo \"\\n\";\n  }\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
