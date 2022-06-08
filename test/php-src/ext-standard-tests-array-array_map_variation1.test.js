// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation1.phpt
  it("Test array_map() function : usage variations - string keys", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_map() : string keys ***\\n\";\n$arr = array(\"stringkey\" => \"value\");\nfunction cb1 ($a) {return array ($a);};\nfunction cb2 ($a,$b) {return array ($a,$b);};\nvar_dump( array_map(\"cb1\", $arr));\nvar_dump( array_map(\"cb2\", $arr,$arr));\nvar_dump( array_map(null,  $arr));\nvar_dump( array_map(null, $arr, $arr));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
