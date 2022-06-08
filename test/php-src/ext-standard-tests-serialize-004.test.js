// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/004.phpt
  it("serialize()/unserialize() floats in array.", function () {
    expect(parser.parseCode("<?php\nerror_reporting (E_ALL);\n$a      = array(4);\n$str    = serialize($a);\nprint('Serialized array: '.$str.\"\\n\");\n$b      = unserialize($str);\nprint('Unserialized array: ');\nvar_dump($b);\nprint(\"\\n\");\n$str    = serialize(array(4.5));\nprint('Serialized array: '.$str.\"\\n\");\n$b      = unserialize($str);\nprint('Unserialized array: ')   ;\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
