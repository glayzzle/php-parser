// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/div_001.phpt
  it("dividing doubles", function () {
    expect(parser.parseCode("<?php\n$d1 = 1.1;\n$d2 = 434234.234;\n$c = $d2 / $d1;\nvar_dump($c);\n$d1 = 1.1;\n$d2 = \"434234.234\";\n$c = $d2 / $d1;\nvar_dump($c);\n$d1 = \"1.1\";\n$d2 = \"434234.234\";\n$c = $d2 / $d1;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
