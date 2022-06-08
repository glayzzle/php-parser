// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/reflectionclass_for_traits.phpt
  it("Tests some parts of ReflectionClass behavior for traits", function () {
    expect(parser.parseCode("<?php\ntrait T {}\n$r = new ReflectionClass('T');\nvar_dump(Reflection::getModifierNames($r->getModifiers()));\nvar_dump($r->isAbstract());\nvar_dump($r->isInstantiable());\nvar_dump($r->isCloneable());\n?>")).toMatchSnapshot();
  });
});
