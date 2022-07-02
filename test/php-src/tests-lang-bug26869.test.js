// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug26869.phpt
  it("Bug #26869 (constant as the key of static array)", function () {
    expect(parser.parseCode("<?php\n    define(\"A\", \"1\");\n    static $a=array(A => 1);\n    var_dump($a);\n    var_dump(isset($a[A]));\n?>")).toMatchSnapshot();
  });
});
