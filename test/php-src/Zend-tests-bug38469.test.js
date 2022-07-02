// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38469.phpt
  it("Bug #38469 (Unexpected creation of cycle)", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$a[0] = $a;\nvar_dump($a);\n$b = array(array());\n$b[0][0] = $b;\nvar_dump($b);\nfunction f() {\n    $a = array();\n    $a[0] = $a;\n    var_dump($a);\n    $b = array(array());\n    $b[0][0] = $b;\n    var_dump($b);\n}\nf();\n?>")).toMatchSnapshot();
  });
});
