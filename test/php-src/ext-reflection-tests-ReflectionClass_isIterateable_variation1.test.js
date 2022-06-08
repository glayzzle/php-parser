// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isIterateable_variation1.phpt
  it("ReflectionClass::isIterateable() variations", function () {
    expect(parser.parseCode("<?php\nclass BasicClass {}\nfunction dump_iterateable($obj)\n{\n    $reflection = new ReflectionClass($obj);\n    var_dump($reflection->isIterateable());\n}\n$basicClass = new BasicClass();\n$stdClass = new StdClass();\ndump_iterateable($basicClass);\ndump_iterateable($stdClass);\n?>")).toMatchSnapshot();
  });
});
