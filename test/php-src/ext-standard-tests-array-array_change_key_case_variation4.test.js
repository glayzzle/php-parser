// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_change_key_case_variation4.phpt
  it("Test array_change_key_case() function : usage variations - different int values for $case", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integer values as $case argument to array_change_key_case() to test behaviour\n */\necho \"*** Testing array_change_key_case() : usage variations ***\\n\";\n$input = array('One' => 'un', 'TWO' => 'deux', 'three' => 'trois');\nfor ($i = -5; $i <=5; $i += 1){\n    echo \"\\n-- \\$sort argument is $i --\\n\";\n    $temp = $input;\n    var_dump(array_change_key_case($temp, $i));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
