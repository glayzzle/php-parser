// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation7.phpt
  it("Test array_filter() function : usage variations - anonymous callback functions", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing different anonymous callback functions with passed by value and reference arguments\n*/\necho \"*** Testing array_filter() : usage variations - Anonymous callback functions ***\\n\";\n$input = array(0, 1, -1, 10, 100, 1000, 'Hello', null);\n// anonymous callback function\necho \"Anonymous callback function with regular parameter and statement\\n\";\nvar_dump( array_filter($input, function($input) { return ($input > 1); }) );\n// anonymous callback function with null argument\necho \"Anonymous callback function with null argument\\n\";\nvar_dump( array_filter($input, function() { return true; }) );\n// anonymous callback function with argument and null statement\necho \"Anonymous callback function with regular argument and null statement\\n\";\nvar_dump( array_filter($input, function($input) { }) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
