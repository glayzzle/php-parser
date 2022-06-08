// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/closures_002.phpt
  it("Reflection on invocable objects", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function __invoke($a, $b = 0) { }\n}\n$rm = new ReflectionMethod(new Test, '__invoke');\nvar_dump($rm->getName());\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n$rp = new ReflectionParameter(array(new Test, '__invoke'), 0);\nvar_dump($rp->isOptional());\n$rp = new ReflectionParameter(array(new Test, '__invoke'), 1);\nvar_dump($rp->isOptional());\n?>")).toMatchSnapshot();
  });
});
