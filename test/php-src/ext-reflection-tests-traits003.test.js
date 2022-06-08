// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/traits003.phpt
  it("Reflection and Traits", function () {
    expect(parser.parseCode("<?php\nabstract class foo {\n}\ntrait bar {\n}\nfinal class baz {\n}\n$x = new ReflectionClass('foo');\nvar_dump($x->isTrait());\n$x = new ReflectionClass('bar');\nvar_dump($x->isTrait());\n$x = new ReflectionClass('baz');\nvar_dump($x->isTrait());\n?>")).toMatchSnapshot();
  });
});
