// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getClosureUsedVariables.phpt
  it("ReflectionFunctionAbstract::getClosureUsedVariables", function () {
    expect(parser.parseCode("<?php\n$reflector = new ReflectionFunction(\"strlen\");\nvar_dump($reflector->getClosureUsedVariables());\n$function = function() {\n    static $one = 1;\n};\n$reflector = new ReflectionFunction($function);\nvar_dump($reflector->getClosureUsedVariables());\n$one = 1;\n$two = 2;\n$function = function() use ($one, $two) {\n    static $three = 3;\n};\n$reflector = new ReflectionFunction($function);\nvar_dump($reflector->getClosureUsedVariables());\n$function = fn() => $three = [$one];\n$reflector = new ReflectionFunction($function);\nvar_dump($reflector->getClosureUsedVariables());\n$function = function() use (&$one) {\n    static $three = 3;\n};\n$reflector = new ReflectionFunction($function);\nvar_dump($reflector->getClosureUsedVariables());\n?>")).toMatchSnapshot();
  });
});
