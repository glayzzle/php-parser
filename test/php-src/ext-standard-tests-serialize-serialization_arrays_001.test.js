// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_arrays_001.phpt
  it("Test serialize() & unserialize() functions: arrays (circular references)", function () {
    expect(parser.parseCode("<?php\necho \"\\n--- Testing Circular reference of an array ---\\n\";\necho \"-- Normal array --\\n\";\n$arr_circ = array(0, 1, -2, 3.333333, \"a\", array(), &$arr_circ);\n$serialize_data = serialize($arr_circ);\nvar_dump( $serialize_data );\n$arr_circ = unserialize($serialize_data);\nvar_dump( $arr_circ );\necho \"\\n-- Associative array --\\n\";\n$arr_asso = array(\"a\" => \"test\");\n$arr_asso[ \"b\" ] = &$arr_asso[ \"a\" ];\nvar_dump($arr_asso);\n$serialize_data = serialize($arr_asso);\nvar_dump($serialize_data);\n$arr_asso = unserialize($serialize_data);\nvar_dump($arr_asso);\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
