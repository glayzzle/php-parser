// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_variation8.phpt
  it("Test array_multisort() function : usage variation - test sort order of all types", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : usage variation  - test sort order of all types***\\n\";\n// Define error handler\nfunction test_error_handler($err_no, $err_msg, $filename, $linenum) {\n    // We're testing sort order not errors so ignore.\n}\nset_error_handler('test_error_handler');\n// define some classes\nclass classWithToString {\n    public function __toString() {\n        return \"Class A object\";\n    }\n}\nclass classWithoutToString { }\n$inputs = array(\n      'int 0' => 0,\n      'float -10.5' => -10.5,\n      array(),\n      'uppercase NULL' => NULL,\n      'lowercase true' => true,\n      'empty string DQ' => \"\",\n      'string DQ' => \"string\",\n      'instance of classWithToString' => new classWithToString(),\n      'undefined var' => @$undefined_var,\n);\nvar_dump(array_multisort($inputs, SORT_STRING));\nvar_dump($inputs);\n?>")).toMatchSnapshot();
  });
});
