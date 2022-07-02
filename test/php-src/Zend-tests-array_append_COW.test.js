// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_append_COW.phpt
  it("Tests that array manipulation code is correctly dealing with copy on write and splitting on reference", function () {
    expect(parser.parseCode("<?php\n    $a=array();\n    $b=1;\n    $c=&$b;\n    $a[]=$b;\n    $b=2;\n    var_dump ($a);\n?>")).toMatchSnapshot();
  });
});
