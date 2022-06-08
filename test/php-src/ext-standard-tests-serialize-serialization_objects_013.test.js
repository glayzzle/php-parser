// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_013.phpt
  it("Object serialization / unserialization: references amongst properties", function () {
    expect(parser.parseCode("<?php\nfunction check(&$obj) {\n    var_dump($obj);\n    $ser = serialize($obj);\n    var_dump($ser);\n    $uobj = unserialize($ser);\n    var_dump($uobj);\n    $uobj->a = \"obj->a.changed\";\n    var_dump($uobj);\n    $uobj->b = \"obj->b.changed\";\n    var_dump($uobj);\n    $uobj->c = \"obj->c.changed\";\n    var_dump($uobj);\n}\necho \"\\n\\n--- a refs b:\\n\";\n$obj = new stdClass;\n$obj->b = 1;\n$obj->a = &$obj->b;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- a refs c:\\n\";\n$obj = new stdClass;\n$obj->c = 1;\n$obj->a = &$obj->c;\n$obj->b = 1;\ncheck($obj);\necho \"\\n\\n--- b refs a:\\n\";\n$obj = new stdClass;\n$obj->a = 1;\n$obj->b = &$obj->a;\n$obj->c = 1;\ncheck($obj);\necho \"\\n\\n--- b refs c:\\n\";\n$obj = new stdClass;\n$obj->a = 1;\n$obj->c = 1;\n$obj->b = &$obj->c;\ncheck($obj);\necho \"\\n\\n--- c refs a:\\n\";\n$obj = new stdClass;\n$obj->a = 1;\n$obj->b = 1;\n$obj->c = &$obj->a;\ncheck($obj);\necho \"\\n\\n--- c refs b:\\n\";\n$obj = new stdClass;\n$obj->a = 1;\n$obj->b = 1;\n$obj->c = &$obj->b;\ncheck($obj);\necho \"\\n\\n--- a,b refs c:\\n\";\n$obj = new stdClass;\n$obj->c = 1;\n$obj->a = &$obj->c;\n$obj->b = &$obj->c;\ncheck($obj);\necho \"\\n\\n--- a,c refs b:\\n\";\n$obj = new stdClass;\n$obj->b = 1;\n$obj->a = &$obj->b;\n$obj->c = &$obj->b;\ncheck($obj);\necho \"\\n\\n--- b,c refs a:\\n\";\n$obj = new stdClass;\n$obj->a = 1;\n$obj->b = &$obj->a;\n$obj->c = &$obj->a;\ncheck($obj);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
