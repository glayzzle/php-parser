// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/operator_notidentical_variation.phpt
  it("Test !== operator : max int 32bit range", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$invalidNotIdentical = array (\nMAX_32Bit, array(MAX_32Bit),\nMIN_32Bit, array(MIN_32Bit),\nMAX_64Bit, array(MAX_64Bit, MAX_64Bit + 1, MAX_64Bit - 1),\nMIN_64Bit, array(MIN_64Bit, MIN_64Bit - 1, MIN_64Bit + 1),\n);\n$validNotIdentical = array (\nMAX_32Bit, array(\"2147483647\", \"2147483647.0000000\", 2.147483647e9, 2147483647.0, \"2147483648\", 2.1474836470001e9, MAX_32Bit - 1, MAX_32Bit + 1),\nMIN_32Bit, array(\"-2147483648\", \"-2147483648.000\", -2.147483648e9, -2147483648.0, \"-2147483649\", -2.1474836480001e9, MIN_32Bit -1, MIN_32Bit + 1),\n);\n$failed = false;\n// test for valid values\nfor ($i = 0; $i < count($validNotIdentical); $i +=2) {\n   $typeToTestVal = $validNotIdentical[$i];\n   $compares = $validNotIdentical[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal !== $compareVal) {\n         //Do Nothing\n      }\n      else {\n         echo \"FAILED: '$typeToTestVal' === '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\n// test for invalid values\nfor ($i = 0; $i < count($invalidNotIdentical); $i +=2) {\n   $typeToTestVal = $invalidNotIdentical[$i];\n   $compares = $invalidNotIdentical[$i + 1];\n   foreach($compares as $compareVal) {\n      if ($typeToTestVal !== $compareVal) {\n         echo \"FAILED: '$typeToTestVal' !== '$compareVal'\\n\";\n         $failed = true;\n      }\n   }\n}\nif ($failed == false) {\n   echo \"Test Passed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
