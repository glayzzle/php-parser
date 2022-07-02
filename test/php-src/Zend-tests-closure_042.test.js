// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_042.phpt
  it("Closure 042: Binding an instance to a non-scoped non-static closures gives it a dummy scope", function () {
    expect(parser.parseCode("<?php\n$c = function() { var_dump($this); };\n$d = $c->bindTo(new stdClass);\n$d();\n$rm = new ReflectionFunction($d);\nvar_dump($rm->getClosureScopeClass()->name); //dummy sope is Closure\n//should have the same effect\n$d = $c->bindTo(new stdClass, NULL);\n$d();\n$rm = new ReflectionFunction($d);\nvar_dump($rm->getClosureScopeClass()->name); //dummy sope is Closure\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
