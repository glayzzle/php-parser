// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75938.phpt
  it("Bug #75938: Modulus value not stored in variable", function () {
    expect(parser.parseCode("<?php\nfunction borken($columns) {\n    $columns = (int) $columns;\n    if ($columns < 1) return 0;\n    $count\t= count([1,2,3,4,5]);\n    var_dump($mod = ($count % $columns));\n    var_dump($mod);\n}\nborken(2);\n?>")).toMatchSnapshot();
  });
});
