// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/011.phpt
  it("Testing nested functions", function () {
    expect(parser.parseCode("<?php\nfunction F()\n{\n    $a = \"Hello \";\n    return($a);\n}\nfunction G()\n{\n  static $myvar = 4;\n  echo \"$myvar \";\n  echo F();\n  echo \"$myvar\";\n}\nG();\n?>")).toMatchSnapshot();
  });
});
