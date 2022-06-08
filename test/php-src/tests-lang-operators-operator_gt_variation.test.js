// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/operator_gt_variation.phpt
  it("Test > operator : max int 32bit range", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$validGreaterThan = array (\nMAX_32Bit, array(MAX_32Bit - 1, \"2147483646\", \"2147483646.999\", 2.147483646e9, 2147483646.9, MIN_32Bit),\n-2147483647, array(MIN_32Bit, \"-2147483648\", \"-2147483647.001\", -2.1474836471e9, -2147483647.9),\n);\n$invalidGreaterThan = array (\nMAX_32Bit, array(2e33, MAX_32Bit + 1),\nMIN_32Bit, array(MIN_32Bit + 1, MAX_32Bit)\n);\n$failed = false;\n// test valid values\nfor ($i = 0; $i < count($validGreaterThan); $i +=2) {\n   $typeToTestVal = $validGreaterThan[$i];\n   $compares = $validGreaterThan[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal > $compareVal) {\n         // do nothing\n      }\n      else {\n         echo \"FAILED: '$typeToTestVal' <= '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\n// test for invalid values\nfor ($i = 0; $i < count($invalidGreaterThan); $i +=2) {\n   $typeToTestVal = $invalidGreaterThan[$i];\n   $compares = $invalidGreaterThan[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal > $compareVal) {\n         echo \"FAILED: '$typeToTestVal' > '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\nif ($failed == false) {\n   echo \"Test Passed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
