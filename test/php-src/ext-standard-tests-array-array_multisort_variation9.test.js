// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_variation9.phpt
  it("Test array_multisort() function : usage variation - test sort order of all types", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : usage variation  - test sort order of all types***\\n\";\n// define some classes\nclass classWithToString {\n    public function __toString() {\n        return \"Class A object\";\n    }\n}\nclass classWithoutToString { }\n$inputs = array(\n      'int 0' => 0,\n      'float -10.5' => -10.5,\n      array(),\n      'uppercase NULL' => NULL,\n      'lowercase true' => true,\n      'empty string DQ' => \"\",\n      'string DQ' => \"string\",\n      'instance of classWithToString' => new classWithToString(),\n      'instance of classWithoutToString' => new classWithoutToString(),\n      'undefined var' => @$undefined_var,\n);\nvar_dump(array_multisort($inputs, SORT_NUMERIC));\nvar_dump($inputs);\n?>")).toMatchSnapshot();
  });
});
