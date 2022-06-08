// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_003.phpt
  it("Test serialize() & unserialize() functions: objects (abstract classes)", function () {
    expect(parser.parseCode("<?php\necho \"\\n--- Testing Abstract Class ---\\n\";\n// abstract class\nabstract class Name\n{\n  public function __construct() {\n    $this->a = 10;\n    $this->b = 12.222;\n    $this->c = \"string\";\n  }\n  abstract protected function getClassName();\n  public function printClassName () {\n    return $this->getClassName();\n  }\n}\n// implement abstract class\nclass extendName extends Name\n{\n  var $a, $b, $c;\n  protected function getClassName() {\n    return \"extendName\";\n  }\n}\n$obj_extendName = new extendName();\n$serialize_data = serialize($obj_extendName);\nvar_dump( $serialize_data );\n$unserialize_data = unserialize($serialize_data);\nvar_dump( $unserialize_data );\n$serialize_data = serialize($obj_extendName->printClassName());\nvar_dump( $serialize_data );\n$unserialize_data = unserialize($serialize_data);\nvar_dump( $unserialize_data );\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
