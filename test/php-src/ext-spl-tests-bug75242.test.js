// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug75242.phpt
  it("Bug #75242: RecursiveArrayIterator doesn't have constants from parent class", function () {
    expect(parser.parseCode("<?php\nclass Foo extends ArrayIterator { }\n$r = new ReflectionClass(Foo::class);\nvar_dump($r->getConstants());\n$r = new ReflectionClass(ArrayIterator::class);\nvar_dump($r->getConstants());\n$r = new ReflectionClass(RecursiveArrayIterator::class);\nvar_dump($r->getConstants());\n?>")).toMatchSnapshot();
  });
});
