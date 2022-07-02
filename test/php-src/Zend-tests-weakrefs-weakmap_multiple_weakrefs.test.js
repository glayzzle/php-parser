// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakmap_multiple_weakrefs.phpt
  it("Multiple WeakMaps / WeakRefs on the same object", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$ref = WeakReference::create($obj);\n$map = new WeakMap;\n$map[$obj] = 1;\n$map2 = new WeakMap;\n$map2[$obj] = 1;\n$map3 = clone $map2;\nvar_dump($ref === WeakReference::create($obj));\nvar_dump($ref->get(), $map, $map2, $map3);\nunset($obj);\nvar_dump($ref->get(), $map, $map2, $map3);\nunset($ref, $map, $map2);\n$obj = new stdClass;\n$ref = WeakReference::create($obj);\n$map = new WeakMap;\n$map[$obj] = 1;\n$map2 = new WeakMap;\n$map2[$obj] = 1;\n$map3 = clone $map2;\nunset($ref, $map, $map2, $map3);\nvar_dump($obj);\nunset($obj);\n?>")).toMatchSnapshot();
  });
});
