// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/018.phpt
  it("SimpleXML: iteration through subnodes and attributes", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Joe\">\n     Text1\n     <child name=\"Ann\" />\n     Text2\n     <child name=\"Marray\" />\n     Text3\n   </person>\n   <person name=\"Boe\">\n     <child name=\"Joe\" />\n     <child name=\"Ann\" />\n   </person>\n</people>\nEOF;\n$xml1 =<<<EOF\n<people>\n   <person name=\"Joe\">\n     <child />\n   </person>\n</people>\nEOF;\nfunction traverse_xml($pad,$xml) {\n  foreach($xml->children() as $name => $node) {\n    echo $pad.\"<$name\";\n    foreach($node->attributes() as $attr => $value) {\n      echo \" $attr=\\\"$value\\\"\";\n    }\n    echo \">\\n\";\n    traverse_xml($pad.\"  \",$node);\n    echo $pad.\"</$name>\\n\";\n  }\n}\ntraverse_xml(\"\",simplexml_load_string($xml));\necho \"----------\\n\";\ntraverse_xml(\"\",simplexml_load_string($xml1));\necho \"---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
