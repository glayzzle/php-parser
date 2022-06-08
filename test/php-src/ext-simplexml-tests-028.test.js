// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/028.phpt
  it("SimpleXML: Adding an elements without text", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people></people>\nEOF;\nfunction traverse_xml($xml, $pad = '')\n{\n  $name = $xml->getName();\n  echo \"$pad<$name\";\n  foreach($xml->attributes() as $attr => $value)\n  {\n    echo \" $attr=\\\"$value\\\"\";\n  }\n  echo \">\" . trim($xml) . \"\\n\";\n  foreach($xml->children() as $node)\n  {\n    traverse_xml($node, $pad.'  ');\n  }\n  echo $pad.\"</$name>\\n\";\n}\n$people = simplexml_load_string($xml);\ntraverse_xml($people);\n$people->person['name'] = 'John';\ntraverse_xml($people);\n?>")).toMatchSnapshot();
  });
});
