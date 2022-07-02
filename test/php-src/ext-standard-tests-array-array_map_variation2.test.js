// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation2.phpt
  it("Test array_map() function : usage variations - references", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_map() : references ***\\n\";\n$arr = array(\"k1\" => \"v1\",\"k2\"=>\"v2\");\n$arr[]=&$arr[\"k1\"];\n$arr[]=&$arr;\nfunction cb1 ($a) {var_dump ($a);return array ($a);};\nvar_dump( array_map(\"cb1\", $arr));\nvar_dump( array_map(null,  $arr));\nvar_dump( array_map(null, $arr, $arr));\n// break cycles\n$arr[0] = null;\n$arr[1] = null;\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
