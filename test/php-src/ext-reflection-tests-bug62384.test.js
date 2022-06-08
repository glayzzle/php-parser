// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug62384.phpt
  it("Bug #62384 (Attempting to invoke a Closure more than once causes segfaul)", function () {
    expect(parser.parseCode("<?php\n$closure1   = function($val){ return $val; };\n$closure2   = function($val){ return $val; };\n$reflection_class   = new ReflectionClass($closure1);\n$reflection_method  = $reflection_class->getMethod('__invoke');\n$arguments1         = array('hello');\n$arguments2         = array('world');\nvar_dump($reflection_method->invokeArgs($closure1, $arguments1));\nvar_dump($reflection_method->invokeArgs($closure2, $arguments2));\n?>")).toMatchSnapshot();
  });
});
