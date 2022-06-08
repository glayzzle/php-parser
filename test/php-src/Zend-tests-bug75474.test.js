// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75474.phpt
  it("Bug #75474: function scope static variables are not bound to a unique function", function () {
    expect(parser.parseCode("<?php\nfunction bar($k, $v) {\n    static $foo = [];\n    $foo[$k] = $v;\n    return $foo;\n}\nvar_dump(bar(0, 0));\nvar_dump(Closure::fromCallable(\"bar\")(1, 1));\nvar_dump(bar(2, 2));\nvar_dump(Closure::fromCallable(\"bar\")(3, 3));\n$RF = new ReflectionFunction(\"bar\");\nvar_dump($RF->getClosure()(4, 4));\nvar_dump(bar(5, 5));\n?>")).toMatchSnapshot();
  });
});
