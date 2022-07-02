// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_variation3.phpt
  it("Test array_fill() function : usage variations  - unexpected values for 'val' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * testing array_fill() by passing different unexpected values for 'val' argument\n */\necho \"*** Testing array_fill() : usage variations ***\\n\";\n// Initialise function arguments not being substituted\n$start_key = 0;\n$num = 2;\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// define a class\nclass test\n{\n  var $t = 10;\n  function __toString()\n  {\n    return \"testObject\";\n  }\n}\n//array of different values for 'val' argument\n$values = array(\n            // empty string\n  /* 1  */  \"\",\n            '',\n            // objects\n  /* 3  */  new test(),\n            // undefined variable\n            @$undefined_var,\n            // unset variable\n  /* 5  */  @$unset_var,\n);\n// loop through each element of the array for 'val' argument\n// check the working of array_fill()\necho \"--- Testing array_fill() with different values for 'val' argument ---\\n\";\n$counter = 1;\nfor($index = 0; $index < count($values); $index ++)\n{\n  echo \"-- Iteration $counter --\\n\";\n  $val = $values[$index];\n  var_dump( array_fill($start_key , $num , $val) );\n  $counter++;\n}\necho\"Done\";\n?>")).toMatchSnapshot();
  });
});
