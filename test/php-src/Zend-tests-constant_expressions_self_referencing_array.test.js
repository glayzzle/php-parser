// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_self_referencing_array.phpt
  it("Self-referencing constant expression (part of a constant AST)", function () {
    expect(parser.parseCode("<?php\nclass A {\n   const FOO = [self::BAR];\n   const BAR = [self::FOO];\n}\nvar_dump(A::FOO);\n?>")).toMatchSnapshot();
  });
});
