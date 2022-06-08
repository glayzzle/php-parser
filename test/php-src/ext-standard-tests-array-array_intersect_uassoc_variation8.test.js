// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_uassoc_variation8.phpt
  it("Test array_intersect_uassoc() function : usage variation - arrays containing referenced variables", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_uassoc() : usage variation ***\\n\";\n//Initialize variables\n$ref_var = 'a';\n$array1 = array('a', $ref_var);\n$array2 = array('a' => 1, &$ref_var);\necho \"\\n-- Testing array_intersect_uassoc() function with referenced variable \\$ref_var has value '$ref_var' --\\n\";\nvar_dump( array_intersect_uassoc($array1, $array2, \"strcasecmp\") );\n// re-assign reference variable to different value\n$ref_var = 10;\necho \"\\n-- Testing array_intersect_uassoc() function with referenced variable \\$ref_var value changed to $ref_var --\\n\";\nvar_dump( array_intersect_uassoc($array1, $array2, \"strcasecmp\") );\n//When array are referenced\n$array2 = &$array1;\necho \"\\n-- Testing array_intersect_uassoc() function when \\$array2 is referencd to \\$array1 --\\n\";\nvar_dump( array_intersect_uassoc($array1, $array2, \"strcasecmp\") );\n?>")).toMatchSnapshot();
  });
});
