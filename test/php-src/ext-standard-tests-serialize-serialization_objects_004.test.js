// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_004.phpt
  it("Test serialize() & unserialize() functions: objects - ensure that COW references of objects are not serialized separately (unlike other types).", function () {
    expect(parser.parseCode("<?php\n$x = new stdClass;\n$ref = &$x;\nvar_dump(serialize(array($x, $x)));\n$x = 1;\n$ref = &$x;\nvar_dump(serialize(array($x, $x)));\n$x = \"a\";\n$ref = &$x;\nvar_dump(serialize(array($x, $x)));\n$x = true;\n$ref = &$x;\nvar_dump(serialize(array($x, $x)));\n$x = null;\n$ref = &$x;\nvar_dump(serialize(array($x, $x)));\n$x = array();\n$ref = &$x;\nvar_dump(serialize(array($x, $x)));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
