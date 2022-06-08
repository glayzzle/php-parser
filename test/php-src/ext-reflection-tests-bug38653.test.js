// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug38653.phpt
  it("Bug #38653 (memory leak in ReflectionClass::getConstant())", function () {
    expect(parser.parseCode("<?php\nclass foo {\n        const cons = 10;\n        const cons1 = \"\";\n        const cons2 = \"test\";\n}\nclass bar extends foo {\n}\n$foo = new ReflectionClass(\"foo\");\nvar_dump($foo->getConstant(\"cons\"));\nvar_dump($foo->getConstant(\"cons1\"));\nvar_dump($foo->getConstant(\"cons2\"));\nvar_dump($foo->getConstant(\"no such const\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
