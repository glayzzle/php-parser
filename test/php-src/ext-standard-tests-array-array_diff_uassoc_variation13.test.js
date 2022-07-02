// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_variation13.phpt
  it("Test array_diff_uassoc() function : usage variations - arrays containing referenced variables", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_uassoc() : usage variation ***\\n\";\n//Initialize variables\n$ref_var = 'a';\n$array1 = array('a', $ref_var);\n$array2 = array('a' => 1, &$ref_var);\necho \"\\n-- Testing array_diff_uassoc() function with referenced variable \\$ref_var has value '$ref_var' --\\n\";\nvar_dump( array_diff_uassoc($array1, $array2, \"strcasecmp\") );\nvar_dump( array_diff_uassoc($array2, $array1, \"strcasecmp\") );\n// re-assign reference variable to different value\n$ref_var = 10.00;\necho \"\\n-- Testing array_diff_uassoc() function with referenced variable \\$ref_var value changed to $ref_var --\\n\";\nvar_dump( array_diff_uassoc($array1, $array2, \"strcasecmp\") );\nvar_dump( array_diff_uassoc($array2, $array1, \"strcasecmp\") );\n//When array are refenced\n$array2 = &$array1;\necho \"\\n-- Testing array_diff_uassoc() function when \\$array2 is referenced to \\$array1 --\\n\";\nvar_dump( array_diff_uassoc($array1, $array2, \"strcasecmp\") );\nvar_dump( array_diff_uassoc($array2, $array1, \"strcasecmp\") );\n?>")).toMatchSnapshot();
  });
});
