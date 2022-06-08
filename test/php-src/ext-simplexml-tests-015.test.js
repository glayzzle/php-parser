// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/015.phpt
  it("SimpleXML: accessing singular subnode as array", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Joe\"></person>\n</people>\nEOF;\n$xml2 =<<<EOF\n<people>\n   <person name=\"Joe\"></person>\n   <person name=\"Boe\"></person>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\nvar_dump($people->person['name']);\nvar_dump($people->person[0]['name']);\n//$people->person['name'] = \"XXX\";\n//var_dump($people->person['name']);\n//var_dump($people->person[0]['name']);\n//$people->person[0]['name'] = \"YYY\";\n//var_dump($people->person['name']);\n//var_dump($people->person[0]['name']);\n//unset($people->person[0]['name']);\n//var_dump($people->person['name']);\n//var_dump($people->person[0]['name']);\n//var_dump(isset($people->person['name']));\n//var_dump(isset($people->person[0]['name']));\n$people = simplexml_load_string($xml2);\nvar_dump($people->person[0]['name']);\nvar_dump($people->person[1]['name']);\n?>")).toMatchSnapshot();
  });
});
