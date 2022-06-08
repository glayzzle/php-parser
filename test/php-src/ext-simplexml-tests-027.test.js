// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/027.phpt
  it("SimpleXML: Adding an elements", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people></people>\nEOF;\nfunction traverse_xml($xml, $pad = '')\n{\n  $name = $xml->getName();\n  echo \"$pad<$name\";\n  foreach($xml->attributes() as $attr => $value)\n  {\n    echo \" $attr=\\\"$value\\\"\";\n  }\n  echo \">\" . trim($xml) . \"\\n\";\n  foreach($xml->children() as $node)\n  {\n    traverse_xml($node, $pad.'  ');\n  }\n  echo $pad.\"</$name>\\n\";\n}\n$people = simplexml_load_string($xml);\ntraverse_xml($people);\n$people->person = 'Joe';\n$people->person['gender'] = 'male';\ntraverse_xml($people);\n$people->person = 'Jane';\ntraverse_xml($people);\n$people->person['gender'] = 'female';\n$people->person[1] = 'Joe';\n$people->person[1]['gender'] = 'male';\ntraverse_xml($people);\n$people->person[3] = 'Minni-me';\n$people->person[2]['gender'] = 'male';\ntraverse_xml($people);\n$people->person[3]['gender'] = 'error';\ntraverse_xml($people);\n?>")).toMatchSnapshot();
  });
});
