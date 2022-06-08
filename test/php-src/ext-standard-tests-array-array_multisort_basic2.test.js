// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_basic2.phpt
  it("Test array_multisort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : basic functionality - renumbering of numeric keys ***\\n\";\n// Initialise all required variables\n$ar1 = array( \"strkey\" => 2,  1,  9 => 1);\n$ar2 = array( 2, \"aa\" , \"1\");\necho \"\\n-- Testing array_multisort() function with all normal arguments --\\n\";\nvar_dump( array_multisort($ar1, SORT_ASC, SORT_REGULAR, $ar2, SORT_ASC, SORT_NUMERIC) );\nvar_dump($ar1, $ar2);\n?>")).toMatchSnapshot();
  });
});
