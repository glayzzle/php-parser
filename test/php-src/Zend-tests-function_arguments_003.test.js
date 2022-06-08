// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments_003.phpt
  it("Function Argument Parsing #003", function () {
    expect(parser.parseCode("<?php\nconst a = 10;\nfunction t1($a = 1 + 1, $b = 1 << 2, $c = \"foo\" . \"bar\", $d = a * 10) {\n    var_dump($a, $b, $c, $d);\n}\nt1();\n?>")).toMatchSnapshot();
  });
});
