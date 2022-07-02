// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/join_variation2.phpt
  it("Test join() function : usage variations - unexpected values for 'pieces' argument(Bug#42789)", function () {
    expect(parser.parseCode("<?php\n/*\n * test join() by passing different unexpected value for pieces argument\n*/\necho \"*** Testing join() : usage variations ***\\n\";\n// initialize all required variables\n$glue = '::';\n// get an unset variable\n$unset_var = array(1, 2);\nunset($unset_var);\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// define a class\nclass test\n{\n  var $t = 10;\n  var $p = 10;\n  function __toString() {\n    return \"testObject\";\n  }\n}\n// array with different values\n$values =  array (\n  // integer values\n  0,\n  1,\n  12345,\n  -2345,\n  // float values\n  10.5,\n  -10.5,\n  10.5e10,\n  10.6E-10,\n  .5,\n  // boolean values\n  true,\n  false,\n  TRUE,\n  FALSE,\n  // string values\n  \"string\",\n  'string',\n  // objects\n  new test(),\n  // empty string\n  \"\",\n  '',\n  // null values\n  NULL,\n  null,\n  // resource variable\n  $fp,\n  // undefined variable\n  @$undefined_var,\n  // unset variable\n  @$unset_var\n);\n// loop through each element of the array and check the working of join()\n// when $pieces argument is supplied with different values\necho \"\\n--- Testing join() by supplying different values for 'pieces' argument ---\\n\";\n$counter = 1;\nfor($index = 0; $index < count($values); $index ++) {\n    echo \"-- Iteration $counter --\\n\";\n    $pieces = $values [$index];\n    try {\n        var_dump( join($glue, $pieces) );\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    $counter ++;\n}\n// close the resources used\nfclose($fp);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
