// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_014.phpt
  it("Object serialization / unserialization: references to external values", function () {
    expect(parser.parseCode("<?php\nfunction check(&$obj) {\n    var_dump($obj);\n    $ser = serialize($obj);\n    var_dump($ser);\n    $uobj = unserialize($ser);\n    var_dump($uobj);\n    $uobj->a = \"obj->a.changed\";\n    var_dump($uobj);\n    $uobj->b = \"obj->b.changed\";\n    var_dump($uobj);\n    $uobj->c = \"obj->c.changed\";\n    var_dump($uobj);\n}\necho \"\\n\\n--- a refs external:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = &$ext;\n$obj->b = 1;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- b refs external:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = 1;\n$obj->b = &$ext;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- c refs external:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = 1;\n$obj->b = 1;\n$obj->c = &$ext;\ncheck($obj);\necho \"\\n\\n--- a,b ref external:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = &$ext;\n$obj->b = &$ext;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- a,b,c ref external:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = &$ext;\n$obj->b = &$ext;\n$obj->c = &$ext;\ncheck($obj);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
