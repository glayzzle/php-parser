// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_basic2.phpt
  it("Test var_export() function with valid boolean values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing var_export() with valid boolean values ***\\n\";\n// different valid  boolean values\n$valid_bool = array(\n            \"1\" => 1,\n            \"TRUE\" => TRUE,\n            \"true\" => true,\n            \"0\" => 0,\n            \"FALSE\" => FALSE,\n            \"false\" => false\n);\n/* Loop to check for above boolean values with var_export() */\necho \"\\n*** Output for boolean values ***\\n\";\nforeach($valid_bool as $key => $bool_value) {\n    echo \"\\n-- Iteration: $key --\\n\";\n    var_export( $bool_value );\n    echo \"\\n\";\n    var_export( $bool_value, FALSE);\n    echo \"\\n\";\n    var_dump( var_export( $bool_value, TRUE) );\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
