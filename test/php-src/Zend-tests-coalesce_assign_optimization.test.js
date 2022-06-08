// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/coalesce_assign_optimization.phpt
  it("Live range construction should not break if colesce assign branch is optimized away", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a[X] ??= Y;\n    var_dump($a);\n}\nfunction test2(string $b, int $c) {\n    $a[~$b] ??= $c;\n}\ndefine('X', 1);\ndefine('Y', 2);\ntest();\ntest2(\"\", 0);\n?>")).toMatchSnapshot();
  });
});
