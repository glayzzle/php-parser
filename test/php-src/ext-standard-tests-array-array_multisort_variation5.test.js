// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_variation5.phpt
  it("Test array_multisort() function : usage variation - testing with multiple array arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : Testing  all array sort specifiers ***\\n\";\n$ar = array( 2, \"aa\" , \"1\");\narray_multisort($ar, SORT_REGULAR, SORT_ASC);\nvar_dump($ar);\narray_multisort($ar, SORT_STRING, SORT_ASC);\nvar_dump($ar);\narray_multisort($ar, SORT_NUMERIC, SORT_ASC);\nvar_dump($ar);\n?>")).toMatchSnapshot();
  });
});
