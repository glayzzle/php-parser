// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getNamespaceName.phpt
  it("ReflectionClass::getNamespaceName()", function () {
    expect(parser.parseCode("<?php\nnamespace A\\B;\nclass Foo {\n}\n$function = new \\ReflectionClass('stdClass');\nvar_dump($function->inNamespace());\nvar_dump($function->getName());\nvar_dump($function->getNamespaceName());\nvar_dump($function->getShortName());\n$function = new \\ReflectionClass('A\\\\B\\\\Foo');\nvar_dump($function->inNamespace());\nvar_dump($function->getName());\nvar_dump($function->getNamespaceName());\nvar_dump($function->getShortName());\n?>")).toMatchSnapshot();
  });
});
