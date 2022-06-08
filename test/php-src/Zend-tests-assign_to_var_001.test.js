// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_to_var_001.phpt
  it("complex cases of variable assignment - 001", function () {
    expect(parser.parseCode("<?php\n$var = array(1,2,3);\n$var1 = &$var;\n$var = $var[1];\nvar_dump($var);\nvar_dump($var1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
