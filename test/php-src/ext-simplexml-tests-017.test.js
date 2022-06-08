// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/017.phpt
  it("SimpleXML: iteration through subnodes", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Joe\">\n     <child name=\"Ann\" />\n     <child name=\"Marray\" />\n   </person>\n   <person name=\"Boe\">\n     <child name=\"Joe\" />\n     <child name=\"Ann\" />\n   </person>\n</people>\nEOF;\n$xml1 =<<<EOF\n<people>\n   <person name=\"Joe\">\n     <child name=\"Ann\" />\n   </person>\n</people>\nEOF;\nfunction print_xml($xml) {\n  foreach($xml->children() as $person) {\n    echo \"person: \".$person['name'].\"\\n\";\n    foreach($person->children() as $child) {\n      echo \"  child: \".$child['name'].\"\\n\";\n    }\n  }\n}\nfunction print_xml2($xml) {\n  for ($i=0;$i<count($xml->person);$i++) {\n    $person = $xml->person[$i];\n    echo \"person: \".$person['name'].\"\\n\";\n    for ($j=0;$j<count($person->child);$j++) {\n      echo \"  child: \".$person->child[$j]['name'].\"\\n\";\n    }\n  }\n}\necho \"---11---\\n\";\nprint_xml(simplexml_load_string($xml));\necho \"---12---\\n\";\nprint_xml(simplexml_load_string($xml1));\necho \"---21---\\n\";\nprint_xml2(simplexml_load_string($xml));\necho \"---22---\\n\";\nprint_xml2(simplexml_load_string($xml1));\n?>")).toMatchSnapshot();
  });
});
