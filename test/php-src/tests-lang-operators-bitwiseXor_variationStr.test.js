// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/bitwiseXor_variationStr.phpt
  it("Test ^ operator : various numbers as strings", function () {
    expect(parser.parseCode("<?php\n$strVals = array(\n   \"0\",\"65\",\"-44\", \"1.2\", \"-7.7\", \"abc\", \"123abc\", \"123e5\", \"123e5xyz\", \" 123abc\", \"123 abc\", \"123abc \", \"3.4a\",\n   \"a5.9\"\n);\nerror_reporting(E_ERROR);\nforeach ($strVals as $strVal) {\n   foreach($strVals as $otherVal) {\n       echo \"--- testing: '$strVal' ^ '$otherVal' ---\\n\";\n      var_dump(bin2hex($strVal^$otherVal));\n   }\n}\n?>")).toMatchSnapshot();
  });
});
