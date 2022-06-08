// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_015.phpt
  it("Object serialization / unserialization: properties reference containing object", function () {
    expect(parser.parseCode("<?php\nfunction check(&$obj) {\n    var_dump($obj);\n    $ser = serialize($obj);\n    var_dump($ser);\n    $uobj = unserialize($ser);\n    var_dump($uobj);\n    $uobj->a = \"obj->a.changed\";\n    var_dump($uobj);\n    $uobj->b = \"obj->b.changed\";\n    var_dump($uobj);\n    $uobj->c = \"obj->c.changed\";\n    var_dump($uobj);\n}\necho \"\\n\\n--- a refs container:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = &$obj;\n$obj->b = 1;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- a eqs container:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = $obj;\n$obj->b = 1;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- a,b ref container:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = &$obj;\n$obj->b = &$obj;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- a,b eq container:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = $obj;\n$obj->b = $obj;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- a,b,c ref container:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = &$obj;\n$obj->b = &$obj;\n$obj->c = &$obj;\ncheck($obj);\necho \"\\n\\n--- a,b,c eq container:\\n\";\n$ext = 1;\n$obj = new stdClass;\n$obj->a = $obj;\n$obj->b = $obj;\n$obj->c = $obj;\ncheck($obj);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
