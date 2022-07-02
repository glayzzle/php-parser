// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_basic1.phpt
  it("Test array_multisort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : basic functionality ***\\n\";\n// Initialise all required variables\n$ar1 = array(\"row1\" => 2, \"row2\" => 1, \"row3\" => 1);\n$ar2 = array(\"row1\" => 2, \"row2\" => \"aa\", \"row3\" => \"1\");\necho \"\\n-- Testing array_multisort() function with all normal arguments --\\n\";\nvar_dump( array_multisort($ar1, SORT_ASC, SORT_REGULAR, $ar2, SORT_DESC, SORT_STRING) );\nvar_dump($ar1, $ar2);\necho \"\\n-- Testing array_multisort() function with one argument --\\n\";\nvar_dump( array_multisort($ar2) );\nvar_dump($ar2);\n?>")).toMatchSnapshot();
  });
});
