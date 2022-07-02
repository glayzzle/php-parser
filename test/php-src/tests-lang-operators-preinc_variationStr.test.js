// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/preinc_variationStr.phpt
  it("Test ++N operator : various numbers as strings", function () {
    expect(parser.parseCode("<?php\n$strVals = array(\n    \"0\",\"65\",\"-44\", \"1.2\", \"-7.7\",\n    \"abc\", \"123abc\", \"123e5\", \"123e5xyz\", \" 123abc\", \"123 abc\", \"123abc \", \"3.4a\", \"a5.9\",\n    \"z\", \"az\", \"zz\", \"Z\", \"AZ\", \"ZZ\", \"9z\", \"19z\", \"99z\",\n);\nforeach ($strVals as $strVal) {\n    echo \"--- testing: '$strVal' ---\\n\";\n    var_dump(++$strVal);\n}\n?>")).toMatchSnapshot();
  });
});
