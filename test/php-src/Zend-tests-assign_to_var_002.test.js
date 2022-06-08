// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_to_var_002.phpt
  it("complex cases of variable assignment - 002", function () {
    expect(parser.parseCode("<?php\n$var = \"intergalactic\";\n$var1 = &$var;\n$var = $var[5];\nvar_dump($var);\nvar_dump($var1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
