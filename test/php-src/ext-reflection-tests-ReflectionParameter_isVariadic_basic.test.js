// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_isVariadic_basic.phpt
  it("ReflectionParameter::isVariadic()", function () {
    expect(parser.parseCode("<?php\nfunction test1($args) {}\nfunction test2(...$args) {}\nfunction test3($arg, ...$args) {}\n$r1 = new ReflectionFunction('test1');\n$r2 = new ReflectionFunction('test2');\n$r3 = new ReflectionFunction('test3');\nvar_dump($r1->getParameters()[0]->isVariadic());\nvar_dump($r2->getParameters()[0]->isVariadic());\nvar_dump($r3->getParameters()[0]->isVariadic());\nvar_dump($r3->getParameters()[1]->isVariadic());\n?>")).toMatchSnapshot();
  });
});
