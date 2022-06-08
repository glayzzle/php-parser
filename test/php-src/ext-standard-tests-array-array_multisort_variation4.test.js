// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_variation4.phpt
  it("Test array_multisort() function : usage variation - testing with multiple array arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_multisort() : Testing  with multiple array arguments ***\\n\";\n$arr1 = array (4,3,3,3);\n$arr2 = array (9,3,2,2);\n$arr3 = array (9,9,2,1);\nvar_dump(array_multisort($arr1, $arr2, $arr3));\nvar_dump($arr1);\nvar_dump($arr2);\nvar_dump($arr3);\n?>")).toMatchSnapshot();
  });
});
