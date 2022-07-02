// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug52719.phpt
  it("Bug #52719: array_walk_recursive crashes if third param of the function is by reference", function () {
    expect(parser.parseCode("<?php\n$array = array(\"hello\", array(\"world\"));\n$userdata = array();\narray_walk_recursive(\n    $array,\n    function ($value, $key, &$userdata) { },\n    $userdata\n);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
