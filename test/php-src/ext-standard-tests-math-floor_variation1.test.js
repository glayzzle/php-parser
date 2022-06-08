// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/floor_variation1.phpt
  it("Test floor() function : usage variations - different data types as $value arg", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing floor() : usage variations ***\\n\";\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// get a class\nclass classA\n{\n}\n// heredoc string\n$heredoc = <<<EOT\nabc\nxyz\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// unexpected values to be passed to $value argument\n$inputs = array(\n       // null data\n/* 1*/ NULL,\n       null,\n       // boolean data\n/* 3*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/* 7*/ \"\",\n       '',\n       array(),\n       // string data\n/*10*/ \"abcxyz\",\n       'abcxyz}',\n       $heredoc,\n       // object data\n/*13*/ new classA(),\n       // undefined data\n/*14*/ @$undefined_var,\n       // unset data\n/*15*/ @$unset_var,\n       // resource variable\n/*16*/ $fp\n);\n// loop through each element of $inputs to check the behaviour of floor()\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    try {\n        var_dump(floor($input));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    $iterator++;\n};\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
