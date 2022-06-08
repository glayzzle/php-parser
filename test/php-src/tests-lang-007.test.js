// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/007.phpt
  it("Function call with global and static variables", function () {
    expect(parser.parseCode("<?php\nerror_reporting(0);\n$a = 10;\nfunction Test()\n{\n    static $a=1;\n    global $b;\n    $c = 1;\n    $b = 5;\n    echo \"$a $b \";\n    $a++;\n    $c++;\n    echo \"$a $c \";\n}\nTest();\necho \"$a $b $c \";\nTest();\necho \"$a $b $c \";\nTest();\n?>")).toMatchSnapshot();
  });
});
