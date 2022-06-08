// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isCloneable_002.phpt
  it("Testing ReflectionClass::isCloneable() with non instantiable objects", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n}\n$obj = new ReflectionClass('foo');\nvar_dump($obj->isCloneable());\nabstract class bar {\n}\n$obj = new ReflectionClass('bar');\nvar_dump($obj->isCloneable());\ninterface baz {\n}\n$obj = new ReflectionClass('baz');\nvar_dump($obj->isCloneable());\n?>")).toMatchSnapshot();
  });
});
