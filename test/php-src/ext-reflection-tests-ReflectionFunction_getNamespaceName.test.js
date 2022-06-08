// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getNamespaceName.phpt
  it("ReflectionFunction::getNamespaceName()", function () {
    expect(parser.parseCode("<?php\nnamespace A\\B;\nfunction foo() {}\n$function = new \\ReflectionFunction('sort');\nvar_dump($function->inNamespace());\nvar_dump($function->getName());\nvar_dump($function->getNamespaceName());\nvar_dump($function->getShortName());\n$function = new \\ReflectionFunction('A\\\\B\\\\foo');\nvar_dump($function->inNamespace());\nvar_dump($function->getName());\nvar_dump($function->getNamespaceName());\nvar_dump($function->getShortName());\n?>")).toMatchSnapshot();
  });
});
