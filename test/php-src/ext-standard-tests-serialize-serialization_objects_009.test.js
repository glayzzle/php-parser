// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_009.phpt
  it("Custom unserialization of classes with no custom unserializer.", function () {
    expect(parser.parseCode("<?php\n$ser = 'C:1:\"C\":6:{dasdas}';\n$a = unserialize($ser);\neval('class C {}');\n$b = unserialize($ser);\nvar_dump($a, $b);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
