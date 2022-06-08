// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/operator_lt_variation.phpt
  it("Test < operator : max int 32bit range", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$validLessThan = array (\n2147483646, array(MAX_32Bit, \"2147483647\", \"2147483647.001\", 2.147483647e9, 2147483647.9),\nMIN_32Bit, array(MIN_32Bit + 1, \"-2147483647\", \"-2147483646.001\", -2.1474836461e9, -2147483646.9),\n);\n$invalidLessThan = array (\nMAX_32Bit, array(\"2147483646\", 2.1474836460001e9, MAX_32Bit - 1),\nMIN_32Bit, array(MIN_32Bit - 1, \"-2147483649\", -2.1474836480001e9)\n);\n$failed = false;\n// test for equality\nfor ($i = 0; $i < count($validLessThan); $i +=2) {\n   $typeToTestVal = $validLessThan[$i];\n   $compares = $validLessThan[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal < $compareVal) {\n         // do nothing\n      }\n      else {\n         echo \"FAILED: '$typeToTestVal' >= '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\n// test for invalid values\nfor ($i = 0; $i < count($invalidLessThan); $i +=2) {\n   $typeToTestVal = $invalidLessThan[$i];\n   $compares = $invalidLessThan[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal < $compareVal) {\n         echo \"FAILED: '$typeToTestVal' < '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\nif ($failed == false) {\n   echo \"Test Passed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
