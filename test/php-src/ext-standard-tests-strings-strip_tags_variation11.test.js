// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_variation11.phpt
  it("Test strip_tags() function : obscure values within attributes", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strip_tags() : obscure functionality ***\\n\";\n// array of arguments\n$string_array = array (\n  'hello <img title=\"<\"> world',\n  'hello <img title=\">\"> world',\n  'hello <img title=\">_<\"> world',\n  \"hello <img title='>_<'> world\"\n);\n// Calling strip_tags() with default arguments\n// loop through the $string_array to test strip_tags on various inputs\n$iteration = 1;\nforeach($string_array as $string)\n{\n  echo \"-- Iteration $iteration --\\n\";\n  var_dump( strip_tags($string) );\n  $iteration++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
