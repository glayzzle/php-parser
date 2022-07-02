// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/008.phpt
  it("Testing recursive function", function () {
    expect(parser.parseCode("<?php\nfunction Test()\n{\n    static $a=1;\n    echo \"$a \";\n    $a++;\n    if($a<10): Test(); endif;\n}\nTest();\n?>")).toMatchSnapshot();
  });
});
