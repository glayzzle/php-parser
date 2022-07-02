// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/join_variation1.phpt
  it("Test join() function : usage variations - unexpected values for 'glue' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * testing join() by passing different unexpected value for glue argument\n*/\necho \"*** Testing join() : usage variations ***\\n\";\n// initialize all required variables\n$pieces = array(\"element1\", \"element2\");\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// define a class\nclass test\n{\n   var $t = 10;\n   function __toString() {\n     return  \"testObject\";\n   }\n}\n// array with different values\n$values =  array (\n  // integer values\n  0,\n  1,\n  12345,\n  -2345,\n  // float values\n  10.5,\n  -10.5,\n  10.1234567e10,\n  10.7654321E-10,\n  .5,\n  // array values\n  array(),\n  array(0),\n  array(1),\n  array(1, 2),\n  array('color' => 'red', 'item' => 'pen'),\n  // boolean values\n  true,\n  false,\n  TRUE,\n  FALSE,\n  // objects\n  new test(),\n  // empty string\n  \"\",\n  '',\n  // resource variable\n  $fp,\n);\n// loop through each element of the array and check the working of join()\n// when $glue argument is supplied with different values\necho \"\\n--- Testing join() by supplying different values for 'glue' argument ---\\n\";\n$counter = 1;\nfor($index = 0; $index < count($values); $index ++) {\n  echo \"-- Iteration $counter --\\n\";\n  $glue = $values [$index];\n  try {\n    var_dump(join($glue, $pieces));\n  } catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n  }\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
