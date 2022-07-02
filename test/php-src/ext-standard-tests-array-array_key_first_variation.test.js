// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_first_variation.phpt
  it("Test array_key_first() function (variation)", function () {
    expect(parser.parseCode("<?php\n/* Various combinations of arrays to be used for the test */\n$array = array( 1,2,3,4,5,6,7,8,9 );\necho\"\\n*** Checking for internal array pointer not being changed by array_key_first ***\\n\";\necho \"\\nCurrent Element is : \";\nvar_dump( current($array) );\necho \"\\nNext Element is : \";\nvar_dump( next($array) );\necho \"\\nFirst key is : \";\nvar_dump( array_key_first($array) );\necho \"\\nCurrent Element after array_key_first operation is: \";\nvar_dump( current($array) );\necho\"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
