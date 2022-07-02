// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_self_assign.phpt
  it("Test variable occurring on both LHS and RHS of list()", function () {
    expect(parser.parseCode("<?php\n$a = [1, 2, 3];\nlist($a, $b, $c) = $a;\nvar_dump($a, $b, $c);\n$b = [1, 2, 3];\nlist($a, $b, $c) = $b;\nvar_dump($a, $b, $c);\n$c = [1, 2, 3];\nlist($a, $b, $c) = $c;\nvar_dump($a, $b, $c);\n$a = [[1, 2], 3];\nlist(list($a, $b), $c) = $a;\nvar_dump($a, $b, $c);\n$b = [[1, 2], 3];\nlist(list($a, $b), $c) = $b;\nvar_dump($a, $b, $c);\n$b = [1, [2, 3]];\nlist($a, list($b, $c)) = $b;\nvar_dump($a, $b, $c);\n$c = [1, [2, 3]];\nlist($a, list($b, $c)) = $c;\nvar_dump($a, $b, $c);\n?>")).toMatchSnapshot();
  });
});
