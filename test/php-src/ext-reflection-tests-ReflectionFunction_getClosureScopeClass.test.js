// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getClosureScopeClass.phpt
  it("Reflection::getClosureScopeClass()", function () {
    expect(parser.parseCode("<?php\n$closure = function($param) { return \"this is a closure\"; };\n$rf = new ReflectionFunction($closure);\nvar_dump($rf->getClosureScopeClass());\nClass A {\n    public static function getClosure() {\n        return function($param) { return \"this is a closure\"; };\n    }\n}\n$closure = A::getClosure();\n$rf = new ReflectionFunction($closure);\nvar_dump($rf->getClosureScopeClass());\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
