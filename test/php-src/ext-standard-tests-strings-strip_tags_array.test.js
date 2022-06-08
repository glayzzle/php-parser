// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_array.phpt
  it("Test strip_tags() function : basic functionality - with array argument", function () {
    expect(parser.parseCode("<?php\n$string = '<p>foo <b>bar</b> <a href=\"#\">foobar</a></p>';\nvar_dump(strip_tags($string));\nvar_dump(strip_tags($string, ['a']));\nvar_dump(strip_tags($string, ['p', 'a']));\nvar_dump(strip_tags($string, []));\nvar_dump(strip_tags($string, ['p' => true, 'a' => false]));\nvar_dump(strip_tags($string, ['p' => 'a']));\n// Previous tests from strip_tags_variation2.phpt\nvar_dump(strip_tags($string, [0]));\nvar_dump(strip_tags($string, [1]));\nvar_dump(strip_tags($string, [1, 2]));\nvar_dump(strip_tags($string, ['color' => 'red', 'item' => 'pen']));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
