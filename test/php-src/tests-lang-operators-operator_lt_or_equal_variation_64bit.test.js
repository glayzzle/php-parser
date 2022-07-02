// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/operator_lt_or_equal_variation_64bit.phpt
  it("Test <= operator : max int 64bit range", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$validLtOrEqual = array (\nMAX_32Bit, array(MAX_32Bit, \"2147483647\", \"2147483647.0000000\", 2.147483647e9, 2147483647.0, MAX_32Bit + 1),\nMIN_32Bit, array(MIN_32Bit, \"-2147483648\", \"-2147483648.000\", -2.147483648e9, -2147483648.0, MIN_32Bit + 1),\nMAX_64Bit, array(MAX_64Bit, MAX_64Bit + 1),\nMIN_64Bit, array(MIN_64Bit, MIN_64Bit - 1, MIN_64Bit + 1),\n);\n$invalidLtOrEqual = array (\nMAX_32Bit, array(\"2147483646\", 2.1474836460001e9, MAX_32Bit - 1),\nMIN_32Bit, array(MIN_32Bit - 1, \"-2147483649\", -2.1474836480001e9)\n);\n$failed = false;\n// test valid values\nfor ($i = 0; $i < count($validLtOrEqual); $i +=2) {\n   $typeToTestVal = $validLtOrEqual[$i];\n   $compares = $validLtOrEqual[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal <= $compareVal) {\n         // do nothing\n      }\n      else {\n         echo \"FAILED: '$typeToTestVal' > '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\n// test invalid values\nfor ($i = 0; $i < count($invalidLtOrEqual); $i +=2) {\n   $typeToTestVal = $invalidLtOrEqual[$i];\n   $compares = $invalidLtOrEqual[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal <= $compareVal) {\n         echo \"FAILED: '$typeToTestVal' <= '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\nif ($failed == false) {\n   echo \"Test Passed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
