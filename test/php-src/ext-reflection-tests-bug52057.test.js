// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug52057.phpt
  it("Bug #52057 (ReflectionClass fails on Closure class)", function () {
    expect(parser.parseCode("<?php\n$closure = function($a) { echo $a; };\n$reflection = new ReflectionClass('closure');\nvar_dump($reflection->hasMethod('__invoke')); // true\n$reflection = new ReflectionClass($closure);\nvar_dump($reflection->hasMethod('__invoke')); // true\n$reflection = new ReflectionObject($closure);\nvar_dump($reflection->hasMethod('__invoke')); // true\n$reflection = new ReflectionClass('closure');\nvar_dump($h = $reflection->getMethod('__invoke')); // true\nvar_dump($h->class.'::'.$h->getName());\n$reflection = new ReflectionClass($closure);\nvar_dump($h = $reflection->getMethod('__invoke')); // true\nvar_dump($h->class.'::'.$h->getName());\n$reflection = new ReflectionObject($closure);\nvar_dump($h = $reflection->getMethod('__invoke')); // true\nvar_dump($h->class.'::'.$h->getName());\n?>")).toMatchSnapshot();
  });
});
