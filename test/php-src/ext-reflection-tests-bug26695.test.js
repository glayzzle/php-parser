// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug26695.phpt
  it("Reflection Bug #26695 (Reflection API does not recognize mixed-case class hints)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n}\nclass Bar {\n  function demo(foo $f) {\n  }\n}\n$class = new ReflectionClass('bar');\n$methods = $class->getMethods();\n$params = $methods[0]->getParameters();\n$class = $params[0]->getClass();\nvar_dump($class->getName());\n?>")).toMatchSnapshot();
  });
});
