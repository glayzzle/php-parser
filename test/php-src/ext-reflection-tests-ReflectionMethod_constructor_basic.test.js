// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_constructor_basic.phpt
  it("ReflectionMethod::isConstructor()", function () {
    expect(parser.parseCode("<?php\nclass NewCtor {\n    function __construct() {\n        echo \"In \" . __METHOD__ . \"\\n\";\n    }\n}\necho \"New-style constructor:\\n\";\n$methodInfo = new ReflectionMethod(\"NewCtor::__construct\");\nvar_dump($methodInfo->isConstructor());\nclass ExtendsNewCtor extends NewCtor {\n}\necho \"\\nInherited new-style constructor\\n\";\n$methodInfo = new ReflectionMethod(\"ExtendsNewCtor::__construct\");\nvar_dump($methodInfo->isConstructor());\nclass X {\n    function Y() {\n        echo \"In \" . __METHOD__ . \"\\n\";\n    }\n}\necho \"\\nNot a constructor:\\n\";\n$methodInfo = new ReflectionMethod(\"X::Y\");\nvar_dump($methodInfo->isConstructor());\nclass Y extends X {\n}\necho \"\\nInherited method of the same name as the class:\\n\";\n$methodInfo = new ReflectionMethod(\"Y::Y\");\nvar_dump($methodInfo->isConstructor());\n?>")).toMatchSnapshot();
  });
});
