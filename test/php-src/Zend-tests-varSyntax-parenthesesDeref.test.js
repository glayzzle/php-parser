// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/parenthesesDeref.phpt
  it("Dereferencing expression parentheses", function () {
    expect(parser.parseCode("<?php\n$array = [&$array, 1];\nvar_dump(($array)[1]);\nvar_dump((($array[0][0])[0])[1]);\nvar_dump(((object) ['a' => 0, 'b' => 1])->b);\n$obj = (object) ['a' => 0, 'b' => ['var_dump', 1]];\n(clone $obj)->b[0](1);\n?>")).toMatchSnapshot();
  });
});
