// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/bitwiseShiftRight_basiclong_64bit.phpt
  it("Test >> operator : 64bit long tests", function () {
    expect(parser.parseCode("<?php\ndefine(\"MAX_64Bit\", 9223372036854775807);\ndefine(\"MAX_32Bit\", 2147483647);\ndefine(\"MIN_64Bit\", -9223372036854775807 - 1);\ndefine(\"MIN_32Bit\", -2147483647 - 1);\n$longVals = array(\n    MAX_64Bit, MIN_64Bit, MAX_32Bit, MIN_32Bit, MAX_64Bit - MAX_32Bit, MIN_64Bit - MIN_32Bit,\n    MAX_32Bit + 1, MIN_32Bit - 1, MAX_32Bit * 2, (MAX_32Bit * 2) + 1, (MAX_32Bit * 2) - 1,\n    MAX_64Bit -1, MAX_64Bit + 1, MIN_64Bit + 1, MIN_64Bit - 1\n);\n$otherVals = array(0, 1, -1, 7, 9, 65, -44, MAX_32Bit, MAX_64Bit);\nerror_reporting(E_ERROR);\nforeach ($longVals as $longVal) {\n   foreach($otherVals as $otherVal) {\n      echo \"--- testing: $longVal >> $otherVal ---\\n\";\n      try {\n        var_dump($longVal>>$otherVal);\n      } catch (ArithmeticError $e) {\n        echo \"Exception: \" . $e->getMessage() . \"\\n\";\n      }\n   }\n}\nforeach ($otherVals as $otherVal) {\n   foreach($longVals as $longVal) {\n      echo \"--- testing: $otherVal >> $longVal ---\\n\";\n      try {\n        var_dump($otherVal>>$longVal);\n      } catch (ArithmeticError $e) {\n        echo \"Exception: \" . $e->getMessage() . \"\\n\";\n      }\n   }\n}\n?>")).toMatchSnapshot();
  });
});
