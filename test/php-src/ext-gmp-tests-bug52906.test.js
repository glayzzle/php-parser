// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug52906.phpt
  it("Bug #52906 gmp_mod returns negative result when non-negative is expected", function () {
    expect(parser.parseCode("<?php\n$vals = array(\n    array(7, 3),\n    array(2, 7),\n    array(12, 7),\n    array(-2, 7),\n    array(-12, 7),\n    array(2, -7),\n    array(12, -7),\n    array(-2, -7),\n    array(-12, -7),\n);\nforeach($vals as $data) {\n    echo \"{$data[0]}%{$data[1]}=\".gmp_strval(gmp_mod($data[0], $data[1]));\n    echo \"\\n\";\n    echo \"{$data[0]}%{$data[1]}=\".gmp_strval(gmp_mod(gmp_init($data[0]), gmp_init($data[1])));\n    echo \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
