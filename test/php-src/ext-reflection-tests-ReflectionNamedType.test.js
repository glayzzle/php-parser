// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionNamedType.phpt
  it("ReflectionNamedType::getName() and ReflectionNamedType::__toString()", function () {
    expect(parser.parseCode("<?php\nfunction testInternalTypes(?Traversable $traversable): ?string {\n    return 'test';\n}\nfunction testUserDefinedTypes(?Test $traversable): ?Test {\n    return new Test;\n}\n$function = new ReflectionFunction('testInternalTypes');\n$type = $function->getParameters()[0]->getType();\n$return = $function->getReturnType();\nvar_dump($type->getName());\nvar_dump((string) $type);\nvar_dump($return->getName());\nvar_dump((string) $return);\n$function = new ReflectionFunction('testUserDefinedTypes');\n$type = $function->getParameters()[0]->getType();\n$return = $function->getReturnType();\nvar_dump($type->getName());\nvar_dump((string) $type);\nvar_dump($return->getName());\nvar_dump((string) $return);\n?>")).toMatchSnapshot();
  });
});
