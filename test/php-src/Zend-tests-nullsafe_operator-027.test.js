// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/027.phpt
  it("Test nullsafe in sub-chain of function argument", function () {
    expect(parser.parseCode("<?php\nfunction takes_ref(&$foo) {\n    $foo = 'foo';\n}\nfunction &returns_ref($ref) {\n    global $foo;\n    return $foo;\n}\nglobal $foo;\n$null = null;\ntakes_ref(returns_ref($null?->null()));\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
