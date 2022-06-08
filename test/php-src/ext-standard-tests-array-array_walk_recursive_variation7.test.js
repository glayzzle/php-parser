// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive_variation7.phpt
  it("Test array_walk_recursive() function : usage variations - anonymous callback function", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing anonymous(run-time) callback function with following variations:\n*   with one parameter\n*   two parameters\n*   three parameters\n*   extra parameters\n*   without parameters\n*/\necho \"*** Testing array_walk_recursive() : anonymous function as callback ***\\n\";\n$input = array( array(2, 5), array(10, 0));\necho \"-- Anonymous function with one argument --\\n\";\nvar_dump( array_walk_recursive($input, function($value) { var_dump($value); echo \"\\n\"; }));\necho \"-- Anonymous function with two arguments --\\n\";\nvar_dump( array_walk_recursive($input, function($value, $key) { var_dump($key); var_dump($value); echo \"\\n\"; }));\necho \"-- Anonymous function with three arguments --\\n\";\nvar_dump( array_walk_recursive($input, function($value, $key, $user_data) { var_dump($key); var_dump($value); var_dump($user_data); echo \"\\n\"; }, 10));\necho \"-- Anonymous function with null argument --\\n\";\nvar_dump( array_walk_recursive( $input, function() { echo \"1\\n\"; }));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
