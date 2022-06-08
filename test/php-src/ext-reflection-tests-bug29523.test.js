// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug29523.phpt
  it("Reflection Bug #29523 (ReflectionParameter::isOptional() is incorrect)", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n}\nfunction optionalTest(TestClass $a, TestClass $b, $c = 3)\n{\n}\n$function = new ReflectionFunction('optionalTest');\n$numberOfNotOptionalParameters = 0;\n$numberOfOptionalParameters = 0;\nforeach($function->getParameters() as $parameter)\n{\n    var_dump($parameter->isOptional());\n    if ($parameter->isOptional())\n    {\n        ++$numberOfOptionalParameters;\n    }\n    else\n    {\n        ++$numberOfNotOptionalParameters;\n    }\n}\nvar_dump($function->getNumberOfRequiredParameters());\nvar_dump($numberOfNotOptionalParameters);\n?>")).toMatchSnapshot();
  });
});
