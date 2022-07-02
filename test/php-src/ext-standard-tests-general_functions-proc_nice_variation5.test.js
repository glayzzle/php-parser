// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_nice_variation5.phpt
  it("Test function proc_nice() by substituting argument 1 with int values.", function () {
    expect(parser.parseCode("<?php\necho \"*** Test substituting argument 1 with int values ***\\n\";\n$variation_array = array (\n    'int 0' => 0,\n    'int 1' => 1,\n    'int 12345' => 12345,\n    'int -12345' => -2345,\n    );\nforeach ( $variation_array as $var ) {\n  var_dump(proc_nice( $var  ) );\n}\n?>")).toMatchSnapshot();
  });
});
