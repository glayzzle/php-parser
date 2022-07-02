// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_variation2.phpt
  it("Test strip_tags() function : usage variations - unexpected values for 'allowable_tags'", function () {
    expect(parser.parseCode("<?php\n/*\n * testing functionality of strip_tags() by giving unexpected values for $allowable_tags argument\n*/\necho \"*** Testing strip_tags() : usage variations ***\\n\";\n// Initialise function argument\n$string = \"<html><a>hello</a></html><p>world</p><!-- COMMENT --><?php echo hello ?>\";\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n//get a resource variable\n$fp = fopen(__FILE__, \"r\");\n//get a class\nclass classA{\n   public function __toString(){\n     return \"Class A Object\";\n   }\n}\n//array of values to iterate over\n$values = array(\n      // int data\n      0,\n      1,\n      12345,\n      -2345,\n      // float data\n      10.5,\n      -10.5,\n      10.5e10,\n      10.6E-10,\n      .5,\n      // null data\n      NULL,\n      null,\n      // boolean data\n      true,\n      false,\n      TRUE,\n      FALSE,\n      // empty data\n      \"\",\n      '',\n      // object data\n      new classA(),\n      // undefined data\n      @$undefined_var,\n      // unset data\n      @$unset_var,\n      // resource variable\n      $fp\n);\n// loop through each element of the array for allowable_tags\n$iterator = 1;\nforeach($values as $value) {\n      echo \"-- Iteration $iterator --\\n\";\n      try {\n        var_dump(strip_tags($string, $value));\n      } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n      }\n      $iterator++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
