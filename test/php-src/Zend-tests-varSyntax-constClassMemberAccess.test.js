// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/constClassMemberAccess.phpt
  it("Const class member access with deference", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const A = ['a' => ['b' => 'c']];\n}\nvar_dump(A::A);\nvar_dump(A::A['a']);\nvar_dump(A::A['a']['b']);\n?>")).toMatchSnapshot();
  });
});
