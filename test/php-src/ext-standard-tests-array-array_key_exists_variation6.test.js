// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_exists_variation6.phpt
  it("Test array_key_exists() function : usage variations -  equality test for certain data types", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass certain data types that can be taken as a key in an array\n * and test whether array_key_exists(() thinks they are equal and therefore\n * returns true when searching for them\n */\necho \"*** Testing array_key_exists() : usage variations ***\\n\";\n$unset = 10;\nunset($unset);\n$array = array ('null' => null,\n                'NULL' => NULL,\n                'empty single quoted string' => '',\n                \"empty double quoted string\" => \"\",\n                'undefined variable' => @$undefined,\n                'unset variable' => @$unset);\n//iterate through original array\nforeach($array as $name => $input) {\n    $iterator = 1;\n    echo \"\\n-- Key in \\$search array is : $name --\\n\";\n    $search[$input] = 'test';\n    //iterate through array again to see which values are considered equal\n    foreach($array as $key) {\n        echo \"Iteration $iterator:  \";\n        var_dump(array_key_exists($key, $search));\n        $iterator++;\n    }\n    $search = null;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
