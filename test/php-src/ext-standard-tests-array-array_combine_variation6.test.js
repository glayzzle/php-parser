// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_combine_variation6.phpt
  it("Test array_combine() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing the behavior of array_combine() by passing array with\n* binary values for $keys and $values argument.\n*/\necho \"*** Testing array_combine() : binary safe checking ***\\n\";\n// array with binary values\n$arr_binary = array(b\"hello\", b\"world\");\n$arr_normal = array(\"hello\", \"world\");\n// array with binary value for $keys and $values argument\nvar_dump( array_combine($arr_binary, $arr_binary) );\n// array with binary value for $values argument\nvar_dump( array_combine($arr_normal, $arr_binary) );\n// array with binary value for $keys argument\nvar_dump( array_combine($arr_binary, $arr_normal) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
