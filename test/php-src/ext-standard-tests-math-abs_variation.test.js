// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/abs_variation.phpt
  it("Test abs() function : usage variations - different data types as $number arg", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different data types as $number argument to abs() to test behaviour\n */\necho \"*** Testing abs() : usage variations ***\\n\";\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// get a class\nclass classA\n{\n  public function __toString() {\n    return \"abs\";\n  }\n}\n// heredoc string\n$heredoc = <<<EOT\nabs\nEOT;\n// get a resource variable\n$fp = fopen(__FILE__, \"r\");\n// unexpected values to be passed to $number argument\n$inputs = array(\n       // null data\n/*10*/ NULL,\n       null,\n       // boolean data\n/*12*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*16*/ \"\",\n       '',\n       array(),\n       // string data\n/*19*/ \"abs\",\n       'abs',\n       $heredoc,\n       // object data\n/*22*/ new classA(),\n       // undefined data\n/*23*/ @$undefined_var,\n       // unset data\n/*24*/ @$unset_var,\n       // resource variable\n/*25*/ $fp\n);\n// loop through each element of $inputs to check the behavior of abs()\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    try {\n        var_dump(abs($input));\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    $iterator++;\n};\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
