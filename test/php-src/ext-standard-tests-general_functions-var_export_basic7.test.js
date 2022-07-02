// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_basic7.phpt
  it("Test var_export() function with valid null values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing var_export() with valid null values ***\\n\";\n// different valid  null values\n$unset_var = array();\nunset ($unset_var); // now a null\n$null_var = NULL;\n$valid_nulls = array(\n                \"NULL\" =>  NULL,\n                \"null\" => null,\n                \"null_var\" => $null_var,\n);\n/* Loop to check for above null values with var_export() */\necho \"\\n*** Output for null values ***\\n\";\nforeach($valid_nulls as $key => $null_value) {\n    echo \"\\n-- Iteration: $key --\\n\";\n    var_export( $null_value );\n    echo \"\\n\";\n    var_export( $null_value, FALSE);\n    echo \"\\n\";\n    var_dump( var_export( $null_value, true) );\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
