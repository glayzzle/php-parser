// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/028.phpt
  it("Test nullsafe in sub-chain of return as ref", function () {
    expect(parser.parseCode("<?php\nfunction &returns_ref($unused) {\n    global $foo;\n    return $foo;\n}\nfunction &returns_ref2() {\n    $null = null;\n    return returns_ref($null?->null);\n}\nglobal $foo;\n$foo2 = &returns_ref2();\n$foo2 = 'foo';\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
