// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/025.phpt
  it("ReflectionFunction basic tests", function () {
    expect(parser.parseCode("<?php\n/**\nhoho\n*/\nfunction test ($a, $b = 1, $c = \"\") {\n    static $var = 1;\n}\n$func = new ReflectionFunction(\"test\");\necho $func;\necho \"--getName--\\n\";\nvar_dump($func->getName());\necho \"--isInternal--\\n\";\nvar_dump($func->isInternal());\necho \"--isUserDefined--\\n\";\nvar_dump($func->isUserDefined());\necho \"--getFilename--\\n\";\nvar_dump($func->getFilename());\necho \"--getStartline--\\n\";\nvar_dump($func->getStartline());\necho \"--getEndline--\\n\";\nvar_dump($func->getEndline());\necho \"--getDocComment--\\n\";\nvar_dump($func->getDocComment());\necho \"--getStaticVariables--\\n\";\nvar_dump($func->getStaticVariables());\necho \"--invoke--\\n\";\nvar_dump($func->invoke(array(1,2,3)));\necho \"--invokeArgs--\\n\";\nvar_dump($func->invokeArgs(array(1,2,3)));\necho \"--returnsReference--\\n\";\nvar_dump($func->returnsReference());\necho \"--getParameters--\\n\";\nvar_dump($func->getParameters());\necho \"--getNumberOfParameters--\\n\";\nvar_dump($func->getNumberOfParameters());\necho \"--getNumberOfRequiredParameters--\\n\";\nvar_dump($func->getNumberOfRequiredParameters());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
