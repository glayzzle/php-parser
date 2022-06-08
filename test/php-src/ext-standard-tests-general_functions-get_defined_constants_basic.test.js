// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_defined_constants_basic.phpt
  it("Test get_defined_constants() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_defined_constants() : basic functionality ***\\n\";\nvar_dump(gettype(get_defined_constants(true)));\nvar_dump(gettype(get_defined_constants()));\n$arr1 = get_defined_constants(false);\n$arr2 = get_defined_constants();\nvar_dump(array_diff($arr1, $arr2));\n$n1 = count(get_defined_constants());\ndefine(\"USER_CONSTANT\", \"test\");\n$arr2 = get_defined_constants();\n$n2 = count($arr2);\nif ($n2 == $n1 + 1 && array_key_exists(\"USER_CONSTANT\", $arr2)) {\n    echo \"TEST PASSED\\n\";\n} else {\n    echo \"TEST FAILED\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
