// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/negate_variationStr.phpt
  it("Test -N operator : various numbers as strings", function () {
    expect(parser.parseCode("<?php\n$strVals = array(\n   \"0\",\"65\",\"-44\", \"1.2\", \"-7.7\", \"abc\", \"123abc\", \"123e5\", \"123e5xyz\", \" 123abc\", \"123 abc\", \"123abc \", \"3.4a\",\n   \"a5.9\"\n);\nforeach ($strVals as $strVal) {\n    echo \"--- testing: '$strVal' ---\\n\";\n    try {\n        var_dump(-$strVal);\n    } catch (\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
