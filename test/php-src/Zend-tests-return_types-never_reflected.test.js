// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_reflected.phpt
  it("never in reflection", function () {
    expect(parser.parseCode("<?php\nfunction foo(): never {}\n$neverType = (new ReflectionFunction('foo'))->getReturnType();\necho $neverType->getName() . \"\\n\";\nvar_dump($neverType->isBuiltin());\n?>")).toMatchSnapshot();
  });
});
