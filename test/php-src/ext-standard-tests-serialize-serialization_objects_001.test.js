// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_001.phpt
  it("Test serialize() & unserialize() functions: objects", function () {
    expect(parser.parseCode("<?php\necho \"\\n--- Testing objects ---\\n\";\nclass members\n{\n  private $var_private = 10;\n  protected $var_protected = \"string\";\n  public $var_public = array(-100.123, \"string\", TRUE);\n}\n$members_obj = new members();\nvar_dump( $members_obj );\n$serialize_data = serialize( $members_obj );\nvar_dump( $serialize_data );\n$members_obj = unserialize( $serialize_data );\nvar_dump( $members_obj );\necho \"\\n--- testing reference to an obj ---\\n\";\n$ref_members_obj = &$members_obj;\n$serialize_data = serialize( $ref_members_obj );\nvar_dump( $serialize_data );\n$ref_members_obj = unserialize( $serialize_data );\nvar_dump( $ref_members_obj );\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
