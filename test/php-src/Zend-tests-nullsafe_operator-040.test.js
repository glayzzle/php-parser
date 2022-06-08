// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/040.phpt
  it("Memory leak in JMP_NULL", function () {
    expect(parser.parseCode("<?php\nfunction &returns_ref($unused) {\n    global $foo;\n    return $foo;\n}\nfunction &returns_ref2() {\n    return returns_ref(returns_ref(null)?->null);\n}\n$foo2 = &returns_ref2();\n$foo2 = 'foo';\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
