// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constants_005.phpt
  it("String interning during constants substitution", function () {
    expect(parser.parseCode("<?php\ndefine (\"A\", \".\" . ord(26) . \".\");\neval(\"class A {const a = A;}\");\nvar_dump(A::a);\n?>")).toMatchSnapshot();
  });
});
