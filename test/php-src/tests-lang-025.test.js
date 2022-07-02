// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/025.phpt
  it("Mean recursion test", function () {
    expect(parser.parseCode("<?php\nfunction RekTest ($nr) {\n    echo \" $nr \";\n    $j=$nr+1;\n    while ($j < 10) {\n      echo \" a \";\n      RekTest($j);\n      $j++;\n      echo \" b $j \";\n    }\n    echo \"\\n\";\n}\nRekTest(0);\n?>")).toMatchSnapshot();
  });
});
