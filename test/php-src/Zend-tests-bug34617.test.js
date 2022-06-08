// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34617.phpt
  it("Bug #34617 (zend_deactivate: objects_store used after zend_objects_store_destroy is called)", function () {
    expect(parser.parseCode("<?php\nclass Thing {}\nfunction boom()\n{\n    $reader = xml_parser_create();\n    $thing = new Thing();\n    xml_set_object($reader, $thing);\n    die(\"ok\\n\");\n    xml_parser_free($reader);\n}\nboom();\n?>")).toMatchSnapshot();
  });
});
