// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/divide_variationStr.phpt
  it("Test / operator : various numbers as strings", function () {
    expect(parser.parseCode("<?php\n$strVals = array(\n   \"0\",\"65\",\"-44\", \"1.2\", \"-7.7\", \"abc\", \"123abc\", \"123e5\", \"123e5xyz\", \" 123abc\", \"123 abc\", \"123abc \", \"3.4a\",\n   \"a5.9\"\n);\nerror_reporting(E_ERROR);\nforeach ($strVals as $strVal) {\n    foreach($strVals as $otherVal) {\n        echo \"--- testing: '$strVal'/'$otherVal' ---\\n\";\n        try {\n            var_dump($strVal/$otherVal);\n        } catch (\\TypeError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        } catch (\\DivisionByZeroError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
