// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/issetOnTemp.phpt
  it("isset() can be used on dereferences of temporary expressions", function () {
    expect(parser.parseCode("<?php\nvar_dump(isset([0, 1][0]));\nvar_dump(isset(([0, 1] + [])[0]));\nvar_dump(isset([[0, 1]][0][0]));\nvar_dump(isset(([[0, 1]] + [])[0][0]));\nvar_dump(isset(((object) ['a' => 'b'])->a));\nvar_dump(isset(['a' => 'b']->a));\nvar_dump(isset(\"str\"->a));\nvar_dump(isset((['a' => 'b'] + [])->a));\nvar_dump(isset((['a' => 'b'] + [])->a->b));\n?>")).toMatchSnapshot();
  });
});
